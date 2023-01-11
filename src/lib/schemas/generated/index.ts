import { z } from "zod";
import * as PrismaClient from "@prisma/client";

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

// PRISMA GENERATED ENUMS
//------------------------------------------------------

export const AccountScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.AccountScalarFieldEnum);

export const CourseScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.CourseScalarFieldEnum);

export const LessonScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.LessonScalarFieldEnum);

export const LessonTypeScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.LessonTypeScalarFieldEnum);

export const ModuleScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.ModuleScalarFieldEnum);

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
  id: z.string().cuid(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  phone: z.string().nullish(),
  role: z.string().nullish(),
  customerId: z.string().nullish(),
});

// ACCOUNT
//------------------------------------------------------

export const AccountSchema = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullish(),
  access_token: z.string().nullish(),
  expires_at: z.number().int().nullish(),
  token_type: z.string().nullish(),
  scope: z.string().nullish(),
  id_token: z.string().nullish(),
  session_state: z.string().nullish(),
});

// COURSE
//------------------------------------------------------

export const CourseSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  overview: z.string(),
  slug: z.string(),
  stripeProductId: z.string().nullish(),
  lastRevised: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.string(),
});

// MODULE
//------------------------------------------------------

export const ModuleSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  overview: z.string().nullish(),
  slug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.string(),
  sortOrder: z.number().int(),
  courseId: z.number().int(),
});

// LESSON
//------------------------------------------------------

export const LessonSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  overview: z.string(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.string(),
  contentType: z.string(),
  moduleId: z.number().int(),
  isFree: z.boolean(),
  sortOrder: z.number().int(),
  videoUrl: z.string().nullish(),
  lessonTypeId: z.number().int(),
});

// LESSON TYPE
//------------------------------------------------------

export const LessonTypeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserArgsSchema: z.ZodType<PrismaClient.Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserIncludeSchema: z.ZodType<PrismaClient.Prisma.UserInclude> = z.object({
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<PrismaClient.Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  phone: z.boolean().optional(),
  role: z.boolean().optional(),
  customerId: z.boolean().optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

// ACCOUNT
//------------------------------------------------------

export const AccountArgsSchema: z.ZodType<PrismaClient.Prisma.AccountArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountIncludeSchema: z.ZodType<PrismaClient.Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<PrismaClient.Prisma.AccountSelect> = z.object({
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

// COURSE
//------------------------------------------------------

export const CourseArgsSchema: z.ZodType<PrismaClient.Prisma.CourseArgs> = z.object({
  select: z.lazy(() => CourseSelectSchema).optional(),
  include: z.lazy(() => CourseIncludeSchema).optional(),
}).strict();

export const CourseIncludeSchema: z.ZodType<PrismaClient.Prisma.CourseInclude> = z.object({
  modules: z.union([z.boolean(), z.lazy(() => ModuleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CourseCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const CourseCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.CourseCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CourseCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CourseCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.CourseCountOutputTypeSelect> = z.object({
  modules: z.boolean().optional(),
}).strict();

export const CourseSelectSchema: z.ZodType<PrismaClient.Prisma.CourseSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  overview: z.boolean().optional(),
  slug: z.boolean().optional(),
  stripeProductId: z.boolean().optional(),
  lastRevised: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  modules: z.union([z.boolean(), z.lazy(() => ModuleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CourseCountOutputTypeArgsSchema)]).optional(),
}).strict();

// MODULE
//------------------------------------------------------

export const ModuleArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleArgs> = z.object({
  select: z.lazy(() => ModuleSelectSchema).optional(),
  include: z.lazy(() => ModuleIncludeSchema).optional(),
}).strict();

export const ModuleIncludeSchema: z.ZodType<PrismaClient.Prisma.ModuleInclude> = z.object({
  lessons: z.union([z.boolean(), z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  course: z.union([z.boolean(), z.lazy(() => CourseArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModuleCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const ModuleCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ModuleCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ModuleCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.ModuleCountOutputTypeSelect> = z.object({
  lessons: z.boolean().optional(),
}).strict();

export const ModuleSelectSchema: z.ZodType<PrismaClient.Prisma.ModuleSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  overview: z.boolean().optional(),
  slug: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  lessons: z.union([z.boolean(), z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  course: z.union([z.boolean(), z.lazy(() => CourseArgsSchema)]).optional(),
  courseId: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModuleCountOutputTypeArgsSchema)]).optional(),
}).strict();

// LESSON
//------------------------------------------------------

export const LessonArgsSchema: z.ZodType<PrismaClient.Prisma.LessonArgs> = z.object({
  select: z.lazy(() => LessonSelectSchema).optional(),
  include: z.lazy(() => LessonIncludeSchema).optional(),
}).strict();

export const LessonIncludeSchema: z.ZodType<PrismaClient.Prisma.LessonInclude> = z.object({
  lessonType: z.union([z.boolean(), z.lazy(() => LessonTypeArgsSchema)]).optional(),
  module: z.union([z.boolean(), z.lazy(() => ModuleArgsSchema)]).optional(),
}).strict();

export const LessonSelectSchema: z.ZodType<PrismaClient.Prisma.LessonSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  overview: z.boolean().optional(),
  slug: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  contentType: z.boolean().optional(),
  moduleId: z.boolean().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  videoUrl: z.boolean().optional(),
  lessonTypeId: z.boolean().optional(),
  lessonType: z.union([z.boolean(), z.lazy(() => LessonTypeArgsSchema)]).optional(),
  module: z.union([z.boolean(), z.lazy(() => ModuleArgsSchema)]).optional(),
}).strict();

// LESSON TYPE
//------------------------------------------------------

export const LessonTypeArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeArgs> = z.object({
  select: z.lazy(() => LessonTypeSelectSchema).optional(),
  include: z.lazy(() => LessonTypeIncludeSchema).optional(),
}).strict();

export const LessonTypeIncludeSchema: z.ZodType<PrismaClient.Prisma.LessonTypeInclude> = z.object({
  lessons: z.union([z.boolean(), z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LessonTypeCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const LessonTypeCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCountOutputTypeArgs> = z.object({
  select: z.lazy(() => LessonTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const LessonTypeCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCountOutputTypeSelect> = z.object({
  lessons: z.boolean().optional(),
}).strict();

export const LessonTypeSelectSchema: z.ZodType<PrismaClient.Prisma.LessonTypeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  lessons: z.union([z.boolean(), z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LessonTypeCountOutputTypeArgsSchema)]).optional(),
}).strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.date()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  customerId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.date()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  customerId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<PrismaClient.Prisma.AccountWhereInput> = z.object({
  AND: z.union([z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  access_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  expires_at: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  token_type: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  id_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  session_state: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByWithRelationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.AccountWhereUniqueInput> = z.object({
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
}).strict();

export const AccountOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByWithAggregationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional(),
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  access_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  expires_at: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  token_type: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  id_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  session_state: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
}).strict();

export const CourseWhereInputSchema: z.ZodType<PrismaClient.Prisma.CourseWhereInput> = z.object({
  AND: z.union([z.lazy(() => CourseWhereInputSchema), z.lazy(() => CourseWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => CourseWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => CourseWhereInputSchema), z.lazy(() => CourseWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  overview: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  stripeProductId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  lastRevised: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  modules: z.lazy(() => ModuleListRelationFilterSchema).optional(),
}).strict();

export const CourseOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.CourseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  stripeProductId: z.lazy(() => SortOrderSchema).optional(),
  lastRevised: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  modules: z.lazy(() => ModuleOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const CourseWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.CourseWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  slug: z.string().optional(),
  stripeProductId: z.string().optional(),
}).strict();

export const CourseOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.CourseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  stripeProductId: z.lazy(() => SortOrderSchema).optional(),
  lastRevised: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CourseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CourseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CourseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CourseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CourseSumOrderByAggregateInputSchema).optional(),
}).strict();

export const CourseScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.CourseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => CourseScalarWhereWithAggregatesInputSchema), z.lazy(() => CourseScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => CourseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => CourseScalarWhereWithAggregatesInputSchema), z.lazy(() => CourseScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  overview: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  stripeProductId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  lastRevised: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict();

export const ModuleWhereInputSchema: z.ZodType<PrismaClient.Prisma.ModuleWhereInput> = z.object({
  AND: z.union([z.lazy(() => ModuleWhereInputSchema), z.lazy(() => ModuleWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ModuleWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModuleWhereInputSchema), z.lazy(() => ModuleWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  overview: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  lessons: z.lazy(() => LessonListRelationFilterSchema).optional(),
  course: z.union([z.lazy(() => CourseRelationFilterSchema), z.lazy(() => CourseWhereInputSchema)]).optional(),
  courseId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
}).strict();

export const ModuleOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.ModuleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  lessons: z.lazy(() => LessonOrderByRelationAggregateInputSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ModuleWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.ModuleWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
}).strict();

export const ModuleOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.ModuleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ModuleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ModuleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ModuleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ModuleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ModuleSumOrderByAggregateInputSchema).optional(),
}).strict();

export const ModuleScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.ModuleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema), z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema), z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  overview: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  sortOrder: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  courseId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
}).strict();

export const LessonWhereInputSchema: z.ZodType<PrismaClient.Prisma.LessonWhereInput> = z.object({
  AND: z.union([z.lazy(() => LessonWhereInputSchema), z.lazy(() => LessonWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonWhereInputSchema), z.lazy(() => LessonWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  overview: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  contentType: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  moduleId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  isFree: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  videoUrl: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  lessonTypeId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  lessonType: z.union([z.lazy(() => LessonTypeRelationFilterSchema), z.lazy(() => LessonTypeWhereInputSchema)]).optional(),
  module: z.union([z.lazy(() => ModuleRelationFilterSchema), z.lazy(() => ModuleWhereInputSchema)]).optional(),
}).strict();

export const LessonOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.LessonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  contentType: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  isFree: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  videoUrl: z.lazy(() => SortOrderSchema).optional(),
  lessonTypeId: z.lazy(() => SortOrderSchema).optional(),
  lessonType: z.lazy(() => LessonTypeOrderByWithRelationInputSchema).optional(),
  module: z.lazy(() => ModuleOrderByWithRelationInputSchema).optional(),
}).strict();

export const LessonWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.LessonWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
}).strict();

export const LessonOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.LessonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  contentType: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  isFree: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  videoUrl: z.lazy(() => SortOrderSchema).optional(),
  lessonTypeId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LessonCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LessonAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LessonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LessonMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LessonSumOrderByAggregateInputSchema).optional(),
}).strict();

export const LessonScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.LessonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => LessonScalarWhereWithAggregatesInputSchema), z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonScalarWhereWithAggregatesInputSchema), z.lazy(() => LessonScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  overview: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  contentType: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  moduleId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  isFree: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  videoUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  lessonTypeId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
}).strict();

export const LessonTypeWhereInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeWhereInput> = z.object({
  AND: z.union([z.lazy(() => LessonTypeWhereInputSchema), z.lazy(() => LessonTypeWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonTypeWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonTypeWhereInputSchema), z.lazy(() => LessonTypeWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  lessons: z.lazy(() => LessonListRelationFilterSchema).optional(),
}).strict();

export const LessonTypeOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  lessons: z.lazy(() => LessonOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const LessonTypeWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
}).strict();

export const LessonTypeOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LessonTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LessonTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LessonTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LessonTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LessonTypeSumOrderByAggregateInputSchema).optional(),
}).strict();

export const LessonTypeScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => LessonTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => LessonTypeScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => LessonTypeScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  customerId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  customerId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  customerId: z.string().optional().nullable(),
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateInput> = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountUpdateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateInput> = z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional(),
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateInput> = z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyInput> = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyMutationInput> = z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyInput> = z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const CourseCreateInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateInput> = z.object({
  title: z.string(),
  overview: z.string(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  modules: z.lazy(() => ModuleCreateNestedManyWithoutCourseInputSchema).optional(),
}).strict();

export const CourseUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  modules: z.lazy(() => ModuleUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
}).strict();

export const CourseUpdateInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  modules: z.lazy(() => ModuleUpdateManyWithoutCourseNestedInputSchema).optional(),
}).strict();

export const CourseUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  modules: z.lazy(() => ModuleUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
}).strict();

export const CourseCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
}).strict();

export const CourseUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateManyMutationInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const CourseUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedUpdateManyInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ModuleCreateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateInput> = z.object({
  title: z.string(),
  overview: z.string().optional().nullable(),
  slug: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  sortOrder: z.number().int(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutModuleInputSchema).optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutModulesInputSchema),
}).strict();

export const ModuleUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string().optional().nullable(),
  slug: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  sortOrder: z.number().int(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutModuleInputSchema).optional(),
  courseId: z.number().int(),
}).strict();

export const ModuleUpdateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutModuleNestedInputSchema).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutModulesNestedInputSchema).optional(),
}).strict();

export const ModuleUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutModuleNestedInputSchema).optional(),
  courseId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ModuleCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string().optional().nullable(),
  slug: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  sortOrder: z.number().int(),
  courseId: z.number().int(),
}).strict();

export const ModuleUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateManyMutationInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ModuleUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateManyInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  courseId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonCreateInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateInput> = z.object({
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int(),
  videoUrl: z.string().optional().nullable(),
  lessonType: z.lazy(() => LessonTypeCreateNestedOneWithoutLessonsInputSchema),
  module: z.lazy(() => ModuleCreateNestedOneWithoutLessonsInputSchema),
}).strict();

export const LessonUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  moduleId: z.number().int(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int(),
  videoUrl: z.string().optional().nullable(),
  lessonTypeId: z.number().int(),
}).strict();

export const LessonUpdateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lessonType: z.lazy(() => LessonTypeUpdateOneRequiredWithoutLessonsNestedInputSchema).optional(),
  module: z.lazy(() => ModuleUpdateOneRequiredWithoutLessonsNestedInputSchema).optional(),
}).strict();

export const LessonUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  moduleId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lessonTypeId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  moduleId: z.number().int(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int(),
  videoUrl: z.string().optional().nullable(),
  lessonTypeId: z.number().int(),
}).strict();

export const LessonUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyMutationInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const LessonUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateManyInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  moduleId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lessonTypeId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonTypeCreateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCreateInput> = z.object({
  name: z.string(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutLessonTypeInputSchema).optional(),
}).strict();

export const LessonTypeUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutLessonTypeInputSchema).optional(),
}).strict();

export const LessonTypeUpdateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutLessonTypeNestedInputSchema).optional(),
}).strict();

export const LessonTypeUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutLessonTypeNestedInputSchema).optional(),
}).strict();

export const LessonTypeCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
}).strict();

export const LessonTypeUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUpdateManyMutationInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonTypeUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUncheckedUpdateManyInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
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
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeNullableFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)]).optional().nullable(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional(),
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
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
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<PrismaClient.Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<PrismaClient.Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional(),
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<PrismaClient.Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string(),
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountCountOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountMaxOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountMinOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<PrismaClient.Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
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

export const ModuleListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.ModuleListRelationFilter> = z.object({
  every: z.lazy(() => ModuleWhereInputSchema).optional(),
  some: z.lazy(() => ModuleWhereInputSchema).optional(),
  none: z.lazy(() => ModuleWhereInputSchema).optional(),
}).strict();

export const ModuleOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const CourseCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.CourseCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  stripeProductId: z.lazy(() => SortOrderSchema).optional(),
  lastRevised: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const CourseAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.CourseAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const CourseMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.CourseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  stripeProductId: z.lazy(() => SortOrderSchema).optional(),
  lastRevised: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const CourseMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.CourseMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  stripeProductId: z.lazy(() => SortOrderSchema).optional(),
  lastRevised: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const CourseSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.CourseSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
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

export const LessonListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.LessonListRelationFilter> = z.object({
  every: z.lazy(() => LessonWhereInputSchema).optional(),
  some: z.lazy(() => LessonWhereInputSchema).optional(),
  none: z.lazy(() => LessonWhereInputSchema).optional(),
}).strict();

export const CourseRelationFilterSchema: z.ZodType<PrismaClient.Prisma.CourseRelationFilter> = z.object({
  is: z.lazy(() => CourseWhereInputSchema).optional(),
  isNot: z.lazy(() => CourseWhereInputSchema).optional(),
}).strict();

export const LessonOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ModuleCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ModuleAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ModuleMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ModuleMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ModuleSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<PrismaClient.Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();

export const LessonTypeRelationFilterSchema: z.ZodType<PrismaClient.Prisma.LessonTypeRelationFilter> = z.object({
  is: z.lazy(() => LessonTypeWhereInputSchema).optional(),
  isNot: z.lazy(() => LessonTypeWhereInputSchema).optional(),
}).strict();

export const ModuleRelationFilterSchema: z.ZodType<PrismaClient.Prisma.ModuleRelationFilter> = z.object({
  is: z.lazy(() => ModuleWhereInputSchema).optional(),
  isNot: z.lazy(() => ModuleWhereInputSchema).optional(),
}).strict();

export const LessonCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  contentType: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  isFree: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  videoUrl: z.lazy(() => SortOrderSchema).optional(),
  lessonTypeId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  lessonTypeId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  contentType: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  isFree: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  videoUrl: z.lazy(() => SortOrderSchema).optional(),
  lessonTypeId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  overview: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  contentType: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  isFree: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  videoUrl: z.lazy(() => SortOrderSchema).optional(),
  lessonTypeId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  lessonTypeId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
}).strict();

export const LessonTypeCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonTypeAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonTypeMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonTypeMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonTypeSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional().nullable(),
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema)]).optional(),
}).strict();

export const ModuleCreateNestedManyWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutCourseInputSchema), z.lazy(() => ModuleCreateWithoutCourseInputSchema).array(), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema), z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => ModuleCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const ModuleUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutCourseInputSchema), z.lazy(() => ModuleCreateWithoutCourseInputSchema).array(), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema), z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => ModuleCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional(),
}).strict();

export const ModuleUpdateManyWithoutCourseNestedInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutCourseInputSchema), z.lazy(() => ModuleCreateWithoutCourseInputSchema).array(), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema), z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModuleUpsertWithWhereUniqueWithoutCourseInputSchema), z.lazy(() => ModuleUpsertWithWhereUniqueWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => ModuleCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModuleUpdateWithWhereUniqueWithoutCourseInputSchema), z.lazy(() => ModuleUpdateWithWhereUniqueWithoutCourseInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModuleUpdateManyWithWhereWithoutCourseInputSchema), z.lazy(() => ModuleUpdateManyWithWhereWithoutCourseInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModuleScalarWhereInputSchema), z.lazy(() => ModuleScalarWhereInputSchema).array()]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
}).strict();

export const ModuleUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutCourseInputSchema), z.lazy(() => ModuleCreateWithoutCourseInputSchema).array(), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema), z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModuleUpsertWithWhereUniqueWithoutCourseInputSchema), z.lazy(() => ModuleUpsertWithWhereUniqueWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => ModuleCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModuleUpdateWithWhereUniqueWithoutCourseInputSchema), z.lazy(() => ModuleUpdateWithWhereUniqueWithoutCourseInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModuleUpdateManyWithWhereWithoutCourseInputSchema), z.lazy(() => ModuleUpdateManyWithWhereWithoutCourseInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModuleScalarWhereInputSchema), z.lazy(() => ModuleScalarWhereInputSchema).array()]).optional(),
}).strict();

export const LessonCreateNestedManyWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateNestedManyWithoutModuleInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutModuleInputSchema), z.lazy(() => LessonCreateWithoutModuleInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutModuleInputSchema), z.lazy(() => LessonCreateOrConnectWithoutModuleInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyModuleInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const CourseCreateNestedOneWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateNestedOneWithoutModulesInput> = z.object({
  create: z.union([z.lazy(() => CourseCreateWithoutModulesInputSchema), z.lazy(() => CourseUncheckedCreateWithoutModulesInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutModulesInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
}).strict();

export const LessonUncheckedCreateNestedManyWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateNestedManyWithoutModuleInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutModuleInputSchema), z.lazy(() => LessonCreateWithoutModuleInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutModuleInputSchema), z.lazy(() => LessonCreateOrConnectWithoutModuleInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyModuleInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const LessonUpdateManyWithoutModuleNestedInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyWithoutModuleNestedInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutModuleInputSchema), z.lazy(() => LessonCreateWithoutModuleInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutModuleInputSchema), z.lazy(() => LessonCreateOrConnectWithoutModuleInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LessonUpsertWithWhereUniqueWithoutModuleInputSchema), z.lazy(() => LessonUpsertWithWhereUniqueWithoutModuleInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyModuleInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => LessonUpdateWithWhereUniqueWithoutModuleInputSchema), z.lazy(() => LessonUpdateWithWhereUniqueWithoutModuleInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LessonUpdateManyWithWhereWithoutModuleInputSchema), z.lazy(() => LessonUpdateManyWithWhereWithoutModuleInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
}).strict();

export const CourseUpdateOneRequiredWithoutModulesNestedInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateOneRequiredWithoutModulesNestedInput> = z.object({
  create: z.union([z.lazy(() => CourseCreateWithoutModulesInputSchema), z.lazy(() => CourseUncheckedCreateWithoutModulesInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutModulesInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutModulesInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => CourseUpdateWithoutModulesInputSchema), z.lazy(() => CourseUncheckedUpdateWithoutModulesInputSchema)]).optional(),
}).strict();

export const LessonUncheckedUpdateManyWithoutModuleNestedInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateManyWithoutModuleNestedInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutModuleInputSchema), z.lazy(() => LessonCreateWithoutModuleInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutModuleInputSchema), z.lazy(() => LessonCreateOrConnectWithoutModuleInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LessonUpsertWithWhereUniqueWithoutModuleInputSchema), z.lazy(() => LessonUpsertWithWhereUniqueWithoutModuleInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyModuleInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => LessonUpdateWithWhereUniqueWithoutModuleInputSchema), z.lazy(() => LessonUpdateWithWhereUniqueWithoutModuleInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LessonUpdateManyWithWhereWithoutModuleInputSchema), z.lazy(() => LessonUpdateManyWithWhereWithoutModuleInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
}).strict();

export const LessonTypeCreateNestedOneWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCreateNestedOneWithoutLessonsInput> = z.object({
  create: z.union([z.lazy(() => LessonTypeCreateWithoutLessonsInputSchema), z.lazy(() => LessonTypeUncheckedCreateWithoutLessonsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => LessonTypeCreateOrConnectWithoutLessonsInputSchema).optional(),
  connect: z.lazy(() => LessonTypeWhereUniqueInputSchema).optional(),
}).strict();

export const ModuleCreateNestedOneWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateNestedOneWithoutLessonsInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutLessonsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModuleCreateOrConnectWithoutLessonsInputSchema).optional(),
  connect: z.lazy(() => ModuleWhereUniqueInputSchema).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional(),
}).strict();

export const LessonTypeUpdateOneRequiredWithoutLessonsNestedInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUpdateOneRequiredWithoutLessonsNestedInput> = z.object({
  create: z.union([z.lazy(() => LessonTypeCreateWithoutLessonsInputSchema), z.lazy(() => LessonTypeUncheckedCreateWithoutLessonsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => LessonTypeCreateOrConnectWithoutLessonsInputSchema).optional(),
  upsert: z.lazy(() => LessonTypeUpsertWithoutLessonsInputSchema).optional(),
  connect: z.lazy(() => LessonTypeWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => LessonTypeUpdateWithoutLessonsInputSchema), z.lazy(() => LessonTypeUncheckedUpdateWithoutLessonsInputSchema)]).optional(),
}).strict();

export const ModuleUpdateOneRequiredWithoutLessonsNestedInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateOneRequiredWithoutLessonsNestedInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutLessonsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModuleCreateOrConnectWithoutLessonsInputSchema).optional(),
  upsert: z.lazy(() => ModuleUpsertWithoutLessonsInputSchema).optional(),
  connect: z.lazy(() => ModuleWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => ModuleUpdateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutLessonsInputSchema)]).optional(),
}).strict();

export const LessonCreateNestedManyWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateNestedManyWithoutLessonTypeInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonCreateWithoutLessonTypeInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutLessonTypeInputSchema), z.lazy(() => LessonCreateOrConnectWithoutLessonTypeInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyLessonTypeInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const LessonUncheckedCreateNestedManyWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateNestedManyWithoutLessonTypeInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonCreateWithoutLessonTypeInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutLessonTypeInputSchema), z.lazy(() => LessonCreateOrConnectWithoutLessonTypeInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyLessonTypeInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const LessonUpdateManyWithoutLessonTypeNestedInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyWithoutLessonTypeNestedInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonCreateWithoutLessonTypeInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutLessonTypeInputSchema), z.lazy(() => LessonCreateOrConnectWithoutLessonTypeInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LessonUpsertWithWhereUniqueWithoutLessonTypeInputSchema), z.lazy(() => LessonUpsertWithWhereUniqueWithoutLessonTypeInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyLessonTypeInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => LessonUpdateWithWhereUniqueWithoutLessonTypeInputSchema), z.lazy(() => LessonUpdateWithWhereUniqueWithoutLessonTypeInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LessonUpdateManyWithWhereWithoutLessonTypeInputSchema), z.lazy(() => LessonUpdateManyWithWhereWithoutLessonTypeInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
}).strict();

export const LessonUncheckedUpdateManyWithoutLessonTypeNestedInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateManyWithoutLessonTypeNestedInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonCreateWithoutLessonTypeInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutLessonTypeInputSchema), z.lazy(() => LessonCreateOrConnectWithoutLessonTypeInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LessonUpsertWithWhereUniqueWithoutLessonTypeInputSchema), z.lazy(() => LessonUpsertWithWhereUniqueWithoutLessonTypeInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyLessonTypeInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => LessonUpdateWithWhereUniqueWithoutLessonTypeInputSchema), z.lazy(() => LessonUpdateWithWhereUniqueWithoutLessonTypeInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LessonUpdateManyWithWhereWithoutLessonTypeInputSchema), z.lazy(() => LessonUpdateManyWithWhereWithoutLessonTypeInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
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

export const NestedDateTimeNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)]).optional().nullable(),
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

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)]).optional().nullable(),
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

export const NestedIntWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<PrismaClient.Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional(),
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

export const NestedBoolFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateWithoutUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema)]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.lazy(() => AccountCreateManyUserInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([z.lazy(() => AccountUpdateWithoutUserInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema)]),
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema)]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([z.lazy(() => AccountUpdateWithoutUserInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema)]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([z.lazy(() => AccountUpdateManyMutationInputSchema), z.lazy(() => AccountUncheckedUpdateManyWithoutAccountsInputSchema)]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  access_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  expires_at: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  token_type: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  id_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  session_state: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  customerId: z.string().optional().nullable(),
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  customerId: z.string().optional().nullable(),
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  role: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const ModuleCreateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateWithoutCourseInput> = z.object({
  title: z.string(),
  overview: z.string().optional().nullable(),
  slug: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  sortOrder: z.number(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutModuleInputSchema).optional(),
}).strict();

export const ModuleUncheckedCreateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  overview: z.string().optional().nullable(),
  slug: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  sortOrder: z.number(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutModuleInputSchema).optional(),
}).strict();

export const ModuleCreateOrConnectWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => ModuleWhereUniqueInputSchema),
  create: z.union([z.lazy(() => ModuleCreateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema)]),
}).strict();

export const ModuleCreateManyCourseInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateManyCourseInputEnvelope> = z.object({
  data: z.lazy(() => ModuleCreateManyCourseInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ModuleUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => ModuleWhereUniqueInputSchema),
  update: z.union([z.lazy(() => ModuleUpdateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutCourseInputSchema)]),
  create: z.union([z.lazy(() => ModuleCreateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema)]),
}).strict();

export const ModuleUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => ModuleWhereUniqueInputSchema),
  data: z.union([z.lazy(() => ModuleUpdateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutCourseInputSchema)]),
}).strict();

export const ModuleUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => ModuleScalarWhereInputSchema),
  data: z.union([z.lazy(() => ModuleUpdateManyMutationInputSchema), z.lazy(() => ModuleUncheckedUpdateManyWithoutModulesInputSchema)]),
}).strict();

export const ModuleScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.ModuleScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => ModuleScalarWhereInputSchema), z.lazy(() => ModuleScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ModuleScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModuleScalarWhereInputSchema), z.lazy(() => ModuleScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  overview: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  courseId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
}).strict();

export const LessonCreateWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateWithoutModuleInput> = z.object({
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number(),
  videoUrl: z.string().optional().nullable(),
  lessonType: z.lazy(() => LessonTypeCreateNestedOneWithoutLessonsInputSchema),
}).strict();

export const LessonUncheckedCreateWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateWithoutModuleInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number(),
  videoUrl: z.string().optional().nullable(),
  lessonTypeId: z.number(),
}).strict();

export const LessonCreateOrConnectWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateOrConnectWithoutModuleInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  create: z.union([z.lazy(() => LessonCreateWithoutModuleInputSchema), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema)]),
}).strict();

export const LessonCreateManyModuleInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyModuleInputEnvelope> = z.object({
  data: z.lazy(() => LessonCreateManyModuleInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const CourseCreateWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateWithoutModulesInput> = z.object({
  title: z.string(),
  overview: z.string(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
}).strict();

export const CourseUncheckedCreateWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedCreateWithoutModulesInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  overview: z.string(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
}).strict();

export const CourseCreateOrConnectWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateOrConnectWithoutModulesInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([z.lazy(() => CourseCreateWithoutModulesInputSchema), z.lazy(() => CourseUncheckedCreateWithoutModulesInputSchema)]),
}).strict();

export const LessonUpsertWithWhereUniqueWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpsertWithWhereUniqueWithoutModuleInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  update: z.union([z.lazy(() => LessonUpdateWithoutModuleInputSchema), z.lazy(() => LessonUncheckedUpdateWithoutModuleInputSchema)]),
  create: z.union([z.lazy(() => LessonCreateWithoutModuleInputSchema), z.lazy(() => LessonUncheckedCreateWithoutModuleInputSchema)]),
}).strict();

export const LessonUpdateWithWhereUniqueWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateWithWhereUniqueWithoutModuleInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  data: z.union([z.lazy(() => LessonUpdateWithoutModuleInputSchema), z.lazy(() => LessonUncheckedUpdateWithoutModuleInputSchema)]),
}).strict();

export const LessonUpdateManyWithWhereWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyWithWhereWithoutModuleInput> = z.object({
  where: z.lazy(() => LessonScalarWhereInputSchema),
  data: z.union([z.lazy(() => LessonUpdateManyMutationInputSchema), z.lazy(() => LessonUncheckedUpdateManyWithoutLessonsInputSchema)]),
}).strict();

export const LessonScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.LessonScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  overview: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  contentType: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  moduleId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  isFree: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  videoUrl: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  lessonTypeId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
}).strict();

export const CourseUpsertWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpsertWithoutModulesInput> = z.object({
  update: z.union([z.lazy(() => CourseUpdateWithoutModulesInputSchema), z.lazy(() => CourseUncheckedUpdateWithoutModulesInputSchema)]),
  create: z.union([z.lazy(() => CourseCreateWithoutModulesInputSchema), z.lazy(() => CourseUncheckedCreateWithoutModulesInputSchema)]),
}).strict();

export const CourseUpdateWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateWithoutModulesInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const CourseUncheckedUpdateWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedUpdateWithoutModulesInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonTypeCreateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCreateWithoutLessonsInput> = z.object({
  name: z.string(),
}).strict();

export const LessonTypeUncheckedCreateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUncheckedCreateWithoutLessonsInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
}).strict();

export const LessonTypeCreateOrConnectWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCreateOrConnectWithoutLessonsInput> = z.object({
  where: z.lazy(() => LessonTypeWhereUniqueInputSchema),
  create: z.union([z.lazy(() => LessonTypeCreateWithoutLessonsInputSchema), z.lazy(() => LessonTypeUncheckedCreateWithoutLessonsInputSchema)]),
}).strict();

export const ModuleCreateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateWithoutLessonsInput> = z.object({
  title: z.string(),
  overview: z.string().optional().nullable(),
  slug: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  sortOrder: z.number(),
  course: z.lazy(() => CourseCreateNestedOneWithoutModulesInputSchema),
}).strict();

export const ModuleUncheckedCreateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedCreateWithoutLessonsInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  overview: z.string().optional().nullable(),
  slug: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  sortOrder: z.number(),
  courseId: z.number(),
}).strict();

export const ModuleCreateOrConnectWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateOrConnectWithoutLessonsInput> = z.object({
  where: z.lazy(() => ModuleWhereUniqueInputSchema),
  create: z.union([z.lazy(() => ModuleCreateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutLessonsInputSchema)]),
}).strict();

export const LessonTypeUpsertWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUpsertWithoutLessonsInput> = z.object({
  update: z.union([z.lazy(() => LessonTypeUpdateWithoutLessonsInputSchema), z.lazy(() => LessonTypeUncheckedUpdateWithoutLessonsInputSchema)]),
  create: z.union([z.lazy(() => LessonTypeCreateWithoutLessonsInputSchema), z.lazy(() => LessonTypeUncheckedCreateWithoutLessonsInputSchema)]),
}).strict();

export const LessonTypeUpdateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUpdateWithoutLessonsInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonTypeUncheckedUpdateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUncheckedUpdateWithoutLessonsInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ModuleUpsertWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpsertWithoutLessonsInput> = z.object({
  update: z.union([z.lazy(() => ModuleUpdateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutLessonsInputSchema)]),
  create: z.union([z.lazy(() => ModuleCreateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutLessonsInputSchema)]),
}).strict();

export const ModuleUpdateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateWithoutLessonsInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutModulesNestedInputSchema).optional(),
}).strict();

export const ModuleUncheckedUpdateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateWithoutLessonsInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  courseId: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonCreateWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateWithoutLessonTypeInput> = z.object({
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number(),
  videoUrl: z.string().optional().nullable(),
  module: z.lazy(() => ModuleCreateNestedOneWithoutLessonsInputSchema),
}).strict();

export const LessonUncheckedCreateWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateWithoutLessonTypeInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  moduleId: z.number(),
  isFree: z.boolean().optional(),
  sortOrder: z.number(),
  videoUrl: z.string().optional().nullable(),
}).strict();

export const LessonCreateOrConnectWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateOrConnectWithoutLessonTypeInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  create: z.union([z.lazy(() => LessonCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema)]),
}).strict();

export const LessonCreateManyLessonTypeInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyLessonTypeInputEnvelope> = z.object({
  data: z.lazy(() => LessonCreateManyLessonTypeInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const LessonUpsertWithWhereUniqueWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpsertWithWhereUniqueWithoutLessonTypeInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  update: z.union([z.lazy(() => LessonUpdateWithoutLessonTypeInputSchema), z.lazy(() => LessonUncheckedUpdateWithoutLessonTypeInputSchema)]),
  create: z.union([z.lazy(() => LessonCreateWithoutLessonTypeInputSchema), z.lazy(() => LessonUncheckedCreateWithoutLessonTypeInputSchema)]),
}).strict();

export const LessonUpdateWithWhereUniqueWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateWithWhereUniqueWithoutLessonTypeInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  data: z.union([z.lazy(() => LessonUpdateWithoutLessonTypeInputSchema), z.lazy(() => LessonUncheckedUpdateWithoutLessonTypeInputSchema)]),
}).strict();

export const LessonUpdateManyWithWhereWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyWithWhereWithoutLessonTypeInput> = z.object({
  where: z.lazy(() => LessonScalarWhereInputSchema),
  data: z.union([z.lazy(() => LessonUpdateManyMutationInputSchema), z.lazy(() => LessonUncheckedUpdateManyWithoutLessonsInputSchema)]),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateWithoutUserInput> = z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyWithoutAccountsInput> = z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const ModuleCreateManyCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string().optional().nullable(),
  slug: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  sortOrder: z.number(),
}).strict();

export const ModuleUpdateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateWithoutCourseInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutModuleNestedInputSchema).optional(),
}).strict();

export const ModuleUncheckedUpdateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutModuleNestedInputSchema).optional(),
}).strict();

export const ModuleUncheckedUpdateManyWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateManyWithoutModulesInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonCreateManyModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyModuleInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int(),
  videoUrl: z.string().optional().nullable(),
  lessonTypeId: z.number(),
}).strict();

export const LessonUpdateWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateWithoutModuleInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lessonType: z.lazy(() => LessonTypeUpdateOneRequiredWithoutLessonsNestedInputSchema).optional(),
}).strict();

export const LessonUncheckedUpdateWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateWithoutModuleInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lessonTypeId: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonUncheckedUpdateManyWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateManyWithoutLessonsInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lessonTypeId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonCreateManyLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyLessonTypeInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  overview: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.string().optional(),
  contentType: z.string().optional(),
  moduleId: z.number().int(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int(),
  videoUrl: z.string().optional().nullable(),
}).strict();

export const LessonUpdateWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateWithoutLessonTypeInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  module: z.lazy(() => ModuleUpdateOneRequiredWithoutLessonsNestedInputSchema).optional(),
}).strict();

export const LessonUncheckedUpdateWithoutLessonTypeInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateWithoutLessonTypeInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  overview: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  moduleId: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.UserAggregateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.UserGroupByArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const AccountFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict();

export const AccountFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict();

export const AccountAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountAggregateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AccountGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.AccountGroupByArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithAggregationInputSchema.array(), AccountOrderByWithAggregationInputSchema]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AccountFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict();

export const CourseFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.CourseFindFirstArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([CourseOrderByWithRelationInputSchema.array(), CourseOrderByWithRelationInputSchema]).optional(),
  cursor: CourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseScalarFieldEnumSchema.array().optional(),
}).strict();

export const CourseFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.CourseFindFirstOrThrowArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([CourseOrderByWithRelationInputSchema.array(), CourseOrderByWithRelationInputSchema]).optional(),
  cursor: CourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseScalarFieldEnumSchema.array().optional(),
}).strict();

export const CourseFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.CourseFindManyArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([CourseOrderByWithRelationInputSchema.array(), CourseOrderByWithRelationInputSchema]).optional(),
  cursor: CourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CourseScalarFieldEnumSchema.array().optional(),
}).strict();

export const CourseAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.CourseAggregateArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([CourseOrderByWithRelationInputSchema.array(), CourseOrderByWithRelationInputSchema]).optional(),
  cursor: CourseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const CourseGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.CourseGroupByArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereInputSchema.optional(),
  orderBy: z.union([CourseOrderByWithAggregationInputSchema.array(), CourseOrderByWithAggregationInputSchema]).optional(),
  by: CourseScalarFieldEnumSchema.array(),
  having: CourseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const CourseFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.CourseFindUniqueArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereUniqueInputSchema,
}).strict();

export const CourseFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.CourseFindUniqueOrThrowArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereUniqueInputSchema,
}).strict();

export const ModuleFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleFindFirstArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereInputSchema.optional(),
  orderBy: z.union([ModuleOrderByWithRelationInputSchema.array(), ModuleOrderByWithRelationInputSchema]).optional(),
  cursor: ModuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ModuleScalarFieldEnumSchema.array().optional(),
}).strict();

export const ModuleFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleFindFirstOrThrowArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereInputSchema.optional(),
  orderBy: z.union([ModuleOrderByWithRelationInputSchema.array(), ModuleOrderByWithRelationInputSchema]).optional(),
  cursor: ModuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ModuleScalarFieldEnumSchema.array().optional(),
}).strict();

export const ModuleFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleFindManyArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereInputSchema.optional(),
  orderBy: z.union([ModuleOrderByWithRelationInputSchema.array(), ModuleOrderByWithRelationInputSchema]).optional(),
  cursor: ModuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ModuleScalarFieldEnumSchema.array().optional(),
}).strict();

export const ModuleAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleAggregateArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereInputSchema.optional(),
  orderBy: z.union([ModuleOrderByWithRelationInputSchema.array(), ModuleOrderByWithRelationInputSchema]).optional(),
  cursor: ModuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ModuleGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleGroupByArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereInputSchema.optional(),
  orderBy: z.union([ModuleOrderByWithAggregationInputSchema.array(), ModuleOrderByWithAggregationInputSchema]).optional(),
  by: ModuleScalarFieldEnumSchema.array(),
  having: ModuleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ModuleFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleFindUniqueArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereUniqueInputSchema,
}).strict();

export const ModuleFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleFindUniqueOrThrowArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereUniqueInputSchema,
}).strict();

export const LessonFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindFirstArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithRelationInputSchema.array(), LessonOrderByWithRelationInputSchema]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindFirstOrThrowArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithRelationInputSchema.array(), LessonOrderByWithRelationInputSchema]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindManyArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithRelationInputSchema.array(), LessonOrderByWithRelationInputSchema]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonAggregateArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithRelationInputSchema.array(), LessonOrderByWithRelationInputSchema]).optional(),
  cursor: LessonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const LessonGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.LessonGroupByArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereInputSchema.optional(),
  orderBy: z.union([LessonOrderByWithAggregationInputSchema.array(), LessonOrderByWithAggregationInputSchema]).optional(),
  by: LessonScalarFieldEnumSchema.array(),
  having: LessonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const LessonFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindUniqueArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict();

export const LessonFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.LessonFindUniqueOrThrowArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict();

export const LessonTypeFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeFindFirstArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereInputSchema.optional(),
  orderBy: z.union([LessonTypeOrderByWithRelationInputSchema.array(), LessonTypeOrderByWithRelationInputSchema]).optional(),
  cursor: LessonTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonTypeScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonTypeFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeFindFirstOrThrowArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereInputSchema.optional(),
  orderBy: z.union([LessonTypeOrderByWithRelationInputSchema.array(), LessonTypeOrderByWithRelationInputSchema]).optional(),
  cursor: LessonTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonTypeScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonTypeFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeFindManyArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereInputSchema.optional(),
  orderBy: z.union([LessonTypeOrderByWithRelationInputSchema.array(), LessonTypeOrderByWithRelationInputSchema]).optional(),
  cursor: LessonTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: LessonTypeScalarFieldEnumSchema.array().optional(),
}).strict();

export const LessonTypeAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeAggregateArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereInputSchema.optional(),
  orderBy: z.union([LessonTypeOrderByWithRelationInputSchema.array(), LessonTypeOrderByWithRelationInputSchema]).optional(),
  cursor: LessonTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const LessonTypeGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeGroupByArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereInputSchema.optional(),
  orderBy: z.union([LessonTypeOrderByWithAggregationInputSchema.array(), LessonTypeOrderByWithAggregationInputSchema]).optional(),
  by: LessonTypeScalarFieldEnumSchema.array(),
  having: LessonTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const LessonTypeFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeFindUniqueArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereUniqueInputSchema,
}).strict();

export const LessonTypeFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeFindUniqueOrThrowArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereUniqueInputSchema,
}).strict();

export const UserCreateArgsSchema: z.ZodType<PrismaClient.Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
}).strict();

export const UserUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
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
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
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

export const AccountCreateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([AccountCreateInputSchema, AccountUncheckedCreateInputSchema]),
}).strict();

export const AccountUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([AccountCreateInputSchema, AccountUncheckedCreateInputSchema]),
  update: z.union([AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema]),
}).strict();

export const AccountCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyArgs> = z.object({
  data: AccountCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AccountDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict();

export const AccountUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema]),
  where: AccountWhereUniqueInputSchema,
}).strict();

export const AccountUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([AccountUpdateManyMutationInputSchema, AccountUncheckedUpdateManyInputSchema]),
  where: AccountWhereInputSchema.optional(),
}).strict();

export const AccountDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict();

export const CourseCreateArgsSchema: z.ZodType<PrismaClient.Prisma.CourseCreateArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  data: z.union([CourseCreateInputSchema, CourseUncheckedCreateInputSchema]),
}).strict();

export const CourseUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.CourseUpsertArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereUniqueInputSchema,
  create: z.union([CourseCreateInputSchema, CourseUncheckedCreateInputSchema]),
  update: z.union([CourseUpdateInputSchema, CourseUncheckedUpdateInputSchema]),
}).strict();

export const CourseCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.CourseCreateManyArgs> = z.object({
  data: CourseCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const CourseDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.CourseDeleteArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  where: CourseWhereUniqueInputSchema,
}).strict();

export const CourseUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateArgs> = z.object({
  select: CourseSelectSchema.optional(),
  include: CourseIncludeSchema.optional(),
  data: z.union([CourseUpdateInputSchema, CourseUncheckedUpdateInputSchema]),
  where: CourseWhereUniqueInputSchema,
}).strict();

export const CourseUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateManyArgs> = z.object({
  data: z.union([CourseUpdateManyMutationInputSchema, CourseUncheckedUpdateManyInputSchema]),
  where: CourseWhereInputSchema.optional(),
}).strict();

export const CourseDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.CourseDeleteManyArgs> = z.object({
  where: CourseWhereInputSchema.optional(),
}).strict();

export const ModuleCreateArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  data: z.union([ModuleCreateInputSchema, ModuleUncheckedCreateInputSchema]),
}).strict();

export const ModuleUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleUpsertArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereUniqueInputSchema,
  create: z.union([ModuleCreateInputSchema, ModuleUncheckedCreateInputSchema]),
  update: z.union([ModuleUpdateInputSchema, ModuleUncheckedUpdateInputSchema]),
}).strict();

export const ModuleCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateManyArgs> = z.object({
  data: ModuleCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ModuleDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleDeleteArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereUniqueInputSchema,
}).strict();

export const ModuleUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  data: z.union([ModuleUpdateInputSchema, ModuleUncheckedUpdateInputSchema]),
  where: ModuleWhereUniqueInputSchema,
}).strict();

export const ModuleUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateManyArgs> = z.object({
  data: z.union([ModuleUpdateManyMutationInputSchema, ModuleUncheckedUpdateManyInputSchema]),
  where: ModuleWhereInputSchema.optional(),
}).strict();

export const ModuleDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.ModuleDeleteManyArgs> = z.object({
  where: ModuleWhereInputSchema.optional(),
}).strict();

export const LessonCreateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonCreateArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
  data: z.union([LessonCreateInputSchema, LessonUncheckedCreateInputSchema]),
}).strict();

export const LessonUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.LessonUpsertArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
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
  include: LessonIncludeSchema.optional(),
  where: LessonWhereUniqueInputSchema,
}).strict();

export const LessonUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateArgs> = z.object({
  select: LessonSelectSchema.optional(),
  include: LessonIncludeSchema.optional(),
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

export const LessonTypeCreateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCreateArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  data: z.union([LessonTypeCreateInputSchema, LessonTypeUncheckedCreateInputSchema]),
}).strict();

export const LessonTypeUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUpsertArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereUniqueInputSchema,
  create: z.union([LessonTypeCreateInputSchema, LessonTypeUncheckedCreateInputSchema]),
  update: z.union([LessonTypeUpdateInputSchema, LessonTypeUncheckedUpdateInputSchema]),
}).strict();

export const LessonTypeCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeCreateManyArgs> = z.object({
  data: LessonTypeCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const LessonTypeDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeDeleteArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  where: LessonTypeWhereUniqueInputSchema,
}).strict();

export const LessonTypeUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUpdateArgs> = z.object({
  select: LessonTypeSelectSchema.optional(),
  include: LessonTypeIncludeSchema.optional(),
  data: z.union([LessonTypeUpdateInputSchema, LessonTypeUncheckedUpdateInputSchema]),
  where: LessonTypeWhereUniqueInputSchema,
}).strict();

export const LessonTypeUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeUpdateManyArgs> = z.object({
  data: z.union([LessonTypeUpdateManyMutationInputSchema, LessonTypeUncheckedUpdateManyInputSchema]),
  where: LessonTypeWhereInputSchema.optional(),
}).strict();

export const LessonTypeDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.LessonTypeDeleteManyArgs> = z.object({
  where: LessonTypeWhereInputSchema.optional(),
}).strict();
