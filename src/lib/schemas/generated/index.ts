import { z } from "zod";
import * as PrismaClient from "@prisma/client";

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

// PRISMA GENERATED ENUMS
//------------------------------------------------------

export const LessonScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.LessonScalarFieldEnum);

export const QueryModeSchema = z.nativeEnum(PrismaClient.Prisma.QueryMode);

export const SortOrderSchema = z.nativeEnum(PrismaClient.Prisma.SortOrder);

export const TransactionIsolationLevelSchema = z.nativeEnum(PrismaClient.Prisma.TransactionIsolationLevel);

export const UserScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.UserScalarFieldEnum);

// CUSTOM ENUMS
//------------------------------------------------------

export const RoleSchema = z.nativeEnum(PrismaClient.Role);

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  customerId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// LESSON
//------------------------------------------------------

export const LessonSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  content: z.string(),
  slug: z.string(),
});

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<PrismaClient.Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  customerId: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict();

// LESSON
//------------------------------------------------------

export const LessonSelectSchema: z.ZodType<PrismaClient.Prisma.LessonSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  slug: z.boolean().optional(),
}).strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  customerId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereUniqueInput> = z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  customerId: z.string().optional(),
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  customerId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumRoleWithAggregatesFilterSchema), z.lazy(() => RoleSchema)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
}).strict();

export const LessonWhereInputSchema: z.ZodType<PrismaClient.Prisma.LessonWhereInput> = z.object({
  AND: z.union([z.lazy(() => LessonWhereInputSchema), z.lazy(() => LessonWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonWhereInputSchema), z.lazy(() => LessonWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict();

export const LessonOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.LessonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.LessonWhereUniqueInput> = z.object({
  id: z.string().uuid().optional(),
}).strict();

export const LessonOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.LessonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LessonCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LessonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LessonMinOrderByAggregateInputSchema).optional(),
}).strict();

export const LessonScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.LessonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => LessonScalarWhereWithAggregatesInputSchema), z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonScalarWhereWithAggregatesInputSchema), z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateInput> = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  customerId: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  customerId: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}).strict();

export const UserUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateManyInput> = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  customerId: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonCreateInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  slug: z.string(),
}).strict();

export const LessonUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  slug: z.string(),
}).strict();

export const LessonUpdateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  content: z.string(),
  slug: z.string(),
}).strict();

export const LessonUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyMutationInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<PrismaClient.Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const EnumRoleFilterSchema: z.ZodType<PrismaClient.Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterSchema)]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
}).strict();

export const LessonCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
}).strict();

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedEnumRoleFilterSchema: z.ZodType<PrismaClient.Prisma.NestedEnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterSchema)]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.UserAggregateArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.UserGroupByArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const LessonFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindFirstArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithRelationInputSchema.array(), LessonOrderByWithRelationInputSchema]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindFirstOrThrowArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithRelationInputSchema.array(), LessonOrderByWithRelationInputSchema]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindManyArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithRelationInputSchema.array(), LessonOrderByWithRelationInputSchema]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonAggregateArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithRelationInputSchema.array(), LessonOrderByWithRelationInputSchema]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const LessonGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.LessonGroupByArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithAggregationInputSchema.array(), LessonOrderByWithAggregationInputSchema]).optional(),
  by: LessonScalarFieldEnumSchema.array(),
  having: LessonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const LessonFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindUniqueArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict();

export const LessonFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindUniqueOrThrowArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict();

export const UserCreateArgsSchema: z.ZodType<PrismaClient.Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
}).strict();

export const UserUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
}).strict();

export const UserCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserCreateManyArgs> = z.object({
  data: UserCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
  where: UserWhereInputSchema.optional(),
}).strict();

export const UserDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict();

export const LessonCreateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonCreateArgs> = z.object({
  select: LessonSelectSchema.optional(),
  data: z.union([LessonCreateInputSchema, LessonUncheckedCreateInputSchema]),
}).strict();

export const LessonUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.LessonUpsertArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereUniqueInputSchema,
  create: z.union([LessonCreateInputSchema, LessonUncheckedCreateInputSchema]),
  update: z.union([LessonUpdateInputSchema, LessonUncheckedUpdateInputSchema]),
}).strict();

export const LessonCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyArgs> = z.object({
  data: LessonCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const LessonDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.LessonDeleteArgs> = z.object({
  select: LessonSelectSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict();

export const LessonUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateArgs> = z.object({
  select: LessonSelectSchema.optional(),
  data: z.union([LessonUpdateInputSchema, LessonUncheckedUpdateInputSchema]),
  where: LessonWhereUniqueInputSchema,
}).strict();

export const LessonUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyArgs> = z.object({
  data: z.union([LessonUpdateManyMutationInputSchema, LessonUncheckedUpdateManyInputSchema]),
  where: LessonWhereInputSchema.optional(),
}).strict();

export const LessonDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonDeleteManyArgs> = z.object({
  where: LessonWhereInputSchema.optional(),
}).strict();
