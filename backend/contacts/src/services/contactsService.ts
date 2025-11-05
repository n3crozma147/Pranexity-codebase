import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ListArgs = { q?: string; page?: number; limit?: number };

export async function listContacts({ q = "", page = 1, limit = 20 }: ListArgs) {
  const where = q
    ? {
        OR: [
          { name: { contains: q, mode: "insensitive" } },
          { email: { contains: q, mode: "insensitive" } },
          { phone: { contains: q, mode: "insensitive" } }
        ]
      }
    : undefined;

  const [items, total] = await Promise.all([
    prisma.contact.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit
    }),
    prisma.contact.count({ where })
  ]);

  return {
    items,
    meta: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit)
    }
  };
}

export async function getContact(id: number) {
  return prisma.contact.findUnique({ where: { id } });
}

export async function createContact(data: { name: string; email: string; phone?: string; notes?: string }) {
  return prisma.contact.create({ data });
}

export async function updateContact(
  id: number,
  data: { name?: string; email?: string; phone?: string; notes?: string }
) {
  return prisma.contact.update({ where: { id }, data });
}

export async function deleteContact(id: number) {
  await prisma.contact.delete({ where: { id } });
}
