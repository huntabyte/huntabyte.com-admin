import { z } from "zod";
import * as PrismaClient from "@prisma/client";

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

// PRISMA GENERATED ENUMS
//------------------------------------------------------

export const ArticleScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.ArticleScalarFieldEnum);

export const CourseScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.CourseScalarFieldEnum);

export const LessonScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.LessonScalarFieldEnum);

export const ModuleScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.ModuleScalarFieldEnum);

export const SortOrderSchema = z.nativeEnum(PrismaClient.Prisma.SortOrder);

export const TagScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.TagScalarFieldEnum);

export const TransactionIsolationLevelSchema = z.nativeEnum(PrismaClient.Prisma.TransactionIsolationLevel);

export const UserScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.UserScalarFieldEnum);

// CUSTOM ENUMS
//------------------------------------------------------

export const PublishStatusSchema = z.nativeEnum(PrismaClient.PublishStatus);

export const RoleSchema = z.nativeEnum(PrismaClient.Role);

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string().uuid(),
  name: z.string().nullish(),
  email: z.string(),
  customerId: z.string().nullish(),
});

// COURSE
//------------------------------------------------------

export const CourseSchema = z.object({
  status: PublishStatusSchema,
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullish(),
  slug: z.string(),
  stripeProductId: z.string().nullish(),
  lastRevised: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// MODULE
//------------------------------------------------------

export const ModuleSchema = z.object({
  status: PublishStatusSchema,
  id: z.number().int(),
  title: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sortOrder: z.number().int(),
  courseId: z.number().int(),
});

// LESSON
//------------------------------------------------------

export const LessonSchema = z.object({
  status: PublishStatusSchema,
  id: z.number().int(),
  title: z.string(),
  slug: z.string().nullish(),
  content: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  contentType: z.string(),
  moduleId: z.number().int().nullish(),
  isFree: z.boolean(),
  sortOrder: z.number().int(),
  videoUrl: z.string().nullish(),
  courseId: z.number().int().nullish(),
});

// ARTICLE
//------------------------------------------------------

export const ArticleSchema = z.object({
  status: PublishStatusSchema,
  id: z.number().int(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tagId: z.number().int().nullish(),
});

// TAG
//------------------------------------------------------

export const TagSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<PrismaClient.Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  role: z.boolean().optional(),
  customerId: z.boolean().optional(),
}).strict();

// COURSE
//------------------------------------------------------

export const CourseArgsSchema: z.ZodType<PrismaClient.Prisma.CourseArgs> = z.object({
  select: z.lazy(() => CourseSelectSchema).optional(),
  include: z.lazy(() => CourseIncludeSchema).optional(),
}).strict();

export const CourseIncludeSchema: z.ZodType<PrismaClient.Prisma.CourseInclude> = z.object({
  modules: z.union([z.boolean(), z.lazy(() => ModuleFindManyArgsSchema)]).optional(),
  lessons: z.union([z.boolean(), z.lazy(() => LessonFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CourseCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const CourseCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.CourseCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CourseCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CourseCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.CourseCountOutputTypeSelect> = z.object({
  modules: z.boolean().optional(),
  lessons: z.boolean().optional(),
}).strict();

export const CourseSelectSchema: z.ZodType<PrismaClient.Prisma.CourseSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  slug: z.boolean().optional(),
  stripeProductId: z.boolean().optional(),
  lastRevised: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  modules: z.union([z.boolean(), z.lazy(() => ModuleFindManyArgsSchema)]).optional(),
  lessons: z.union([z.boolean(), z.lazy(() => LessonFindManyArgsSchema)]).optional(),
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
  module: z.union([z.boolean(), z.lazy(() => ModuleArgsSchema)]).optional(),
  course: z.union([z.boolean(), z.lazy(() => CourseArgsSchema)]).optional(),
}).strict();

export const LessonSelectSchema: z.ZodType<PrismaClient.Prisma.LessonSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
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
  module: z.union([z.boolean(), z.lazy(() => ModuleArgsSchema)]).optional(),
  course: z.union([z.boolean(), z.lazy(() => CourseArgsSchema)]).optional(),
  courseId: z.boolean().optional(),
}).strict();

// ARTICLE
//------------------------------------------------------

export const ArticleArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleArgs> = z.object({
  select: z.lazy(() => ArticleSelectSchema).optional(),
  include: z.lazy(() => ArticleIncludeSchema).optional(),
}).strict();

export const ArticleIncludeSchema: z.ZodType<PrismaClient.Prisma.ArticleInclude> = z.object({
  Tag: z.union([z.boolean(), z.lazy(() => TagArgsSchema)]).optional(),
}).strict();

export const ArticleSelectSchema: z.ZodType<PrismaClient.Prisma.ArticleSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  content: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Tag: z.union([z.boolean(), z.lazy(() => TagArgsSchema)]).optional(),
  tagId: z.boolean().optional(),
}).strict();

// TAG
//------------------------------------------------------

export const TagArgsSchema: z.ZodType<PrismaClient.Prisma.TagArgs> = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();

export const TagIncludeSchema: z.ZodType<PrismaClient.Prisma.TagInclude> = z.object({
  articles: z.union([z.boolean(), z.lazy(() => ArticleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const TagCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.TagCountOutputTypeArgs> = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TagCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.TagCountOutputTypeSelect> = z.object({
  articles: z.boolean().optional(),
}).strict();

export const TagSelectSchema: z.ZodType<PrismaClient.Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  articles: z.union([z.boolean(), z.lazy(() => ArticleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
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
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
  customerId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereUniqueInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string().optional(),
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
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
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleWithAggregatesFilterSchema), z.lazy(() => RoleSchema)]).optional(),
  customerId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
}).strict();

export const CourseWhereInputSchema: z.ZodType<PrismaClient.Prisma.CourseWhereInput> = z.object({
  AND: z.union([z.lazy(() => CourseWhereInputSchema), z.lazy(() => CourseWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => CourseWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => CourseWhereInputSchema), z.lazy(() => CourseWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  stripeProductId: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  lastRevised: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  modules: z.lazy(() => ModuleListRelationFilterSchema).optional(),
  lessons: z.lazy(() => LessonListRelationFilterSchema).optional(),
}).strict();

export const CourseOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.CourseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  stripeProductId: z.lazy(() => SortOrderSchema).optional(),
  lastRevised: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  modules: z.lazy(() => ModuleOrderByRelationAggregateInputSchema).optional(),
  lessons: z.lazy(() => LessonOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const CourseWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.CourseWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  slug: z.string().optional(),
  stripeProductId: z.string().optional(),
}).strict();

export const CourseOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.CourseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
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
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  stripeProductId: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  lastRevised: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusWithAggregatesFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
}).strict();

export const ModuleWhereInputSchema: z.ZodType<PrismaClient.Prisma.ModuleWhereInput> = z.object({
  AND: z.union([z.lazy(() => ModuleWhereInputSchema), z.lazy(() => ModuleWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ModuleWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModuleWhereInputSchema), z.lazy(() => ModuleWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  lessons: z.lazy(() => LessonListRelationFilterSchema).optional(),
  course: z.union([z.lazy(() => CourseRelationFilterSchema), z.lazy(() => CourseWhereInputSchema)]).optional(),
  courseId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
}).strict();

export const ModuleOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.ModuleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
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
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusWithAggregatesFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  sortOrder: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  courseId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
}).strict();

export const LessonWhereInputSchema: z.ZodType<PrismaClient.Prisma.LessonWhereInput> = z.object({
  AND: z.union([z.lazy(() => LessonWhereInputSchema), z.lazy(() => LessonWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonWhereInputSchema), z.lazy(() => LessonWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  contentType: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  moduleId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  isFree: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  videoUrl: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  module: z.union([z.lazy(() => ModuleRelationFilterSchema), z.lazy(() => ModuleWhereInputSchema)]).optional().nullable(),
  course: z.union([z.lazy(() => CourseRelationFilterSchema), z.lazy(() => CourseWhereInputSchema)]).optional().nullable(),
  courseId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
}).strict();

export const LessonOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.LessonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
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
  module: z.lazy(() => ModuleOrderByWithRelationInputSchema).optional(),
  course: z.lazy(() => CourseOrderByWithRelationInputSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.LessonWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
}).strict();

export const LessonOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.LessonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
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
  courseId: z.lazy(() => SortOrderSchema).optional(),
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
  slug: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusWithAggregatesFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  contentType: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  moduleId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  isFree: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  videoUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  courseId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
}).strict();

export const ArticleWhereInputSchema: z.ZodType<PrismaClient.Prisma.ArticleWhereInput> = z.object({
  AND: z.union([z.lazy(() => ArticleWhereInputSchema), z.lazy(() => ArticleWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ArticleWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArticleWhereInputSchema), z.lazy(() => ArticleWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  Tag: z.union([z.lazy(() => TagRelationFilterSchema), z.lazy(() => TagWhereInputSchema)]).optional().nullable(),
  tagId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
}).strict();

export const ArticleOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.ArticleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ArticleWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.ArticleWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  slug: z.string().optional(),
}).strict();

export const ArticleOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.ArticleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ArticleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ArticleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ArticleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ArticleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ArticleSumOrderByAggregateInputSchema).optional(),
}).strict();

export const ArticleScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.ArticleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema), z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema), z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusWithAggregatesFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  tagId: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
}).strict();

export const TagWhereInputSchema: z.ZodType<PrismaClient.Prisma.TagWhereInput> = z.object({
  AND: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  articles: z.lazy(() => ArticleListRelationFilterSchema).optional(),
}).strict();

export const TagOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  articles: z.lazy(() => ArticleOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const TagWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.TagWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
}).strict();

export const TagOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.TagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagSumOrderByAggregateInputSchema).optional(),
}).strict();

export const TagScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.TagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputSchema), z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputSchema), z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  customerId: z.string().optional().nullable(),
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  customerId: z.string().optional().nullable(),
}).strict();

export const UserUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  customerId: z.string().optional().nullable(),
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  customerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const CourseCreateInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateInput> = z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  modules: z.lazy(() => ModuleCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
}).strict();

export const CourseUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  modules: z.lazy(() => ModuleUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
}).strict();

export const CourseUpdateInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  modules: z.lazy(() => ModuleUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
}).strict();

export const CourseUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  modules: z.lazy(() => ModuleUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
}).strict();

export const CourseCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
}).strict();

export const CourseUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateManyMutationInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const CourseUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedUpdateManyInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ModuleCreateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateInput> = z.object({
  title: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  sortOrder: z.number().int().optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutModuleInputSchema).optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutModulesInputSchema),
}).strict();

export const ModuleUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  sortOrder: z.number().int().optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutModuleInputSchema).optional(),
  courseId: z.number().int(),
}).strict();

export const ModuleUpdateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutModuleNestedInputSchema).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutModulesNestedInputSchema).optional(),
}).strict();

export const ModuleUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutModuleNestedInputSchema).optional(),
  courseId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ModuleCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  sortOrder: z.number().int().optional(),
  courseId: z.number().int(),
}).strict();

export const ModuleUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateManyMutationInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ModuleUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateManyInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  courseId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonCreateInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateInput> = z.object({
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  videoUrl: z.string().optional().nullable(),
  module: z.lazy(() => ModuleCreateNestedOneWithoutLessonsInputSchema).optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutLessonsInputSchema).optional(),
}).strict();

export const LessonUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  moduleId: z.number().int().optional().nullable(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  videoUrl: z.string().optional().nullable(),
  courseId: z.number().int().optional().nullable(),
}).strict();

export const LessonUpdateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  module: z.lazy(() => ModuleUpdateOneWithoutLessonsNestedInputSchema).optional(),
  course: z.lazy(() => CourseUpdateOneWithoutLessonsNestedInputSchema).optional(),
}).strict();

export const LessonUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  moduleId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  courseId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const LessonCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  moduleId: z.number().int().optional().nullable(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  videoUrl: z.string().optional().nullable(),
  courseId: z.number().int().optional().nullable(),
}).strict();

export const LessonUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyMutationInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const LessonUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateManyInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  moduleId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  courseId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const ArticleCreateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateInput> = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  Tag: z.lazy(() => TagCreateNestedOneWithoutArticlesInputSchema).optional(),
}).strict();

export const ArticleUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  tagId: z.number().int().optional().nullable(),
}).strict();

export const ArticleUpdateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUpdateInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  Tag: z.lazy(() => TagUpdateOneWithoutArticlesNestedInputSchema).optional(),
}).strict();

export const ArticleUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tagId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const ArticleCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  tagId: z.number().int().optional().nullable(),
}).strict();

export const ArticleUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUpdateManyMutationInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ArticleUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUncheckedUpdateManyInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tagId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const TagCreateInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateInput> = z.object({
  name: z.string(),
  articles: z.lazy(() => ArticleCreateNestedManyWithoutTagInputSchema).optional(),
}).strict();

export const TagUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  articles: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutTagInputSchema).optional(),
}).strict();

export const TagUpdateInputSchema: z.ZodType<PrismaClient.Prisma.TagUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  articles: z.lazy(() => ArticleUpdateManyWithoutTagNestedInputSchema).optional(),
}).strict();

export const TagUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedUpdateInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  articles: z.lazy(() => ArticleUncheckedUpdateManyWithoutTagNestedInputSchema).optional(),
}).strict();

export const TagCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
}).strict();

export const TagUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.TagUpdateManyMutationInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const TagUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedUpdateManyInput> = z.object({
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

export const EnumRoleFilterSchema: z.ZodType<PrismaClient.Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterSchema)]).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
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

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
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

export const EnumPublishStatusFilterSchema: z.ZodType<PrismaClient.Prisma.EnumPublishStatusFilter> = z.object({
  equals: z.lazy(() => PublishStatusSchema).optional(),
  in: z.lazy(() => PublishStatusSchema).array().optional(),
  notIn: z.lazy(() => PublishStatusSchema).array().optional(),
  not: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => NestedEnumPublishStatusFilterSchema)]).optional(),
}).strict();

export const ModuleListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.ModuleListRelationFilter> = z.object({
  every: z.lazy(() => ModuleWhereInputSchema).optional(),
  some: z.lazy(() => ModuleWhereInputSchema).optional(),
  none: z.lazy(() => ModuleWhereInputSchema).optional(),
}).strict();

export const LessonListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.LessonListRelationFilter> = z.object({
  every: z.lazy(() => LessonWhereInputSchema).optional(),
  some: z.lazy(() => LessonWhereInputSchema).optional(),
  none: z.lazy(() => LessonWhereInputSchema).optional(),
}).strict();

export const ModuleOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const CourseCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.CourseCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
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
  description: z.lazy(() => SortOrderSchema).optional(),
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
  description: z.lazy(() => SortOrderSchema).optional(),
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

export const EnumPublishStatusWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.EnumPublishStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PublishStatusSchema).optional(),
  in: z.lazy(() => PublishStatusSchema).array().optional(),
  notIn: z.lazy(() => PublishStatusSchema).array().optional(),
  not: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => NestedEnumPublishStatusWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPublishStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPublishStatusFilterSchema).optional(),
}).strict();

export const CourseRelationFilterSchema: z.ZodType<PrismaClient.Prisma.CourseRelationFilter> = z.object({
  is: z.lazy(() => CourseWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CourseWhereInputSchema).optional().nullable(),
}).strict();

export const ModuleCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
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
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ModuleMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ModuleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
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

export const BoolFilterSchema: z.ZodType<PrismaClient.Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();

export const ModuleRelationFilterSchema: z.ZodType<PrismaClient.Prisma.ModuleRelationFilter> = z.object({
  is: z.lazy(() => ModuleWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ModuleWhereInputSchema).optional().nullable(),
}).strict();

export const LessonCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
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
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
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
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
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
  courseId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const LessonSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.LessonSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  moduleId: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  courseId: z.lazy(() => SortOrderSchema).optional(),
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

export const BoolWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
}).strict();

export const TagRelationFilterSchema: z.ZodType<PrismaClient.Prisma.TagRelationFilter> = z.object({
  is: z.lazy(() => TagWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TagWhereInputSchema).optional().nullable(),
}).strict();

export const ArticleCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ArticleAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ArticleMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ArticleMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ArticleSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ArticleListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.ArticleListRelationFilter> = z.object({
  every: z.lazy(() => ArticleWhereInputSchema).optional(),
  some: z.lazy(() => ArticleWhereInputSchema).optional(),
  none: z.lazy(() => ArticleWhereInputSchema).optional(),
}).strict();

export const ArticleOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ArticleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const TagSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TagSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
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

export const ModuleCreateNestedManyWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutCourseInputSchema), z.lazy(() => ModuleCreateWithoutCourseInputSchema).array(), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema), z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => ModuleCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const LessonCreateNestedManyWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutCourseInputSchema), z.lazy(() => LessonCreateWithoutCourseInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema), z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const ModuleUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutCourseInputSchema), z.lazy(() => ModuleCreateWithoutCourseInputSchema).array(), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema), z.lazy(() => ModuleCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => ModuleCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ModuleWhereUniqueInputSchema), z.lazy(() => ModuleWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const LessonUncheckedCreateNestedManyWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateNestedManyWithoutCourseInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutCourseInputSchema), z.lazy(() => LessonCreateWithoutCourseInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema), z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyCourseInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional(),
}).strict();

export const EnumPublishStatusFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.EnumPublishStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PublishStatusSchema).optional(),
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

export const LessonUpdateManyWithoutCourseNestedInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutCourseInputSchema), z.lazy(() => LessonCreateWithoutCourseInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema), z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputSchema), z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputSchema), z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputSchema), z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
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

export const LessonUncheckedUpdateManyWithoutCourseNestedInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateManyWithoutCourseNestedInput> = z.object({
  create: z.union([z.lazy(() => LessonCreateWithoutCourseInputSchema), z.lazy(() => LessonCreateWithoutCourseInputSchema).array(), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema), z.lazy(() => LessonCreateOrConnectWithoutCourseInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputSchema), z.lazy(() => LessonUpsertWithWhereUniqueWithoutCourseInputSchema).array()]).optional(),
  createMany: z.lazy(() => LessonCreateManyCourseInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LessonWhereUniqueInputSchema), z.lazy(() => LessonWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputSchema), z.lazy(() => LessonUpdateWithWhereUniqueWithoutCourseInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputSchema), z.lazy(() => LessonUpdateManyWithWhereWithoutCourseInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
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

export const ModuleCreateNestedOneWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateNestedOneWithoutLessonsInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutLessonsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModuleCreateOrConnectWithoutLessonsInputSchema).optional(),
  connect: z.lazy(() => ModuleWhereUniqueInputSchema).optional(),
}).strict();

export const CourseCreateNestedOneWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateNestedOneWithoutLessonsInput> = z.object({
  create: z.union([z.lazy(() => CourseCreateWithoutLessonsInputSchema), z.lazy(() => CourseUncheckedCreateWithoutLessonsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutLessonsInputSchema).optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional(),
}).strict();

export const ModuleUpdateOneWithoutLessonsNestedInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateOneWithoutLessonsNestedInput> = z.object({
  create: z.union([z.lazy(() => ModuleCreateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutLessonsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModuleCreateOrConnectWithoutLessonsInputSchema).optional(),
  upsert: z.lazy(() => ModuleUpsertWithoutLessonsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ModuleWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => ModuleUpdateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutLessonsInputSchema)]).optional(),
}).strict();

export const CourseUpdateOneWithoutLessonsNestedInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateOneWithoutLessonsNestedInput> = z.object({
  create: z.union([z.lazy(() => CourseCreateWithoutLessonsInputSchema), z.lazy(() => CourseUncheckedCreateWithoutLessonsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => CourseCreateOrConnectWithoutLessonsInputSchema).optional(),
  upsert: z.lazy(() => CourseUpsertWithoutLessonsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => CourseWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => CourseUpdateWithoutLessonsInputSchema), z.lazy(() => CourseUncheckedUpdateWithoutLessonsInputSchema)]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
}).strict();

export const TagCreateNestedOneWithoutArticlesInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateNestedOneWithoutArticlesInput> = z.object({
  create: z.union([z.lazy(() => TagCreateWithoutArticlesInputSchema), z.lazy(() => TagUncheckedCreateWithoutArticlesInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutArticlesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
}).strict();

export const TagUpdateOneWithoutArticlesNestedInputSchema: z.ZodType<PrismaClient.Prisma.TagUpdateOneWithoutArticlesNestedInput> = z.object({
  create: z.union([z.lazy(() => TagCreateWithoutArticlesInputSchema), z.lazy(() => TagUncheckedCreateWithoutArticlesInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutArticlesInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutArticlesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => TagUpdateWithoutArticlesInputSchema), z.lazy(() => TagUncheckedUpdateWithoutArticlesInputSchema)]).optional(),
}).strict();

export const ArticleCreateNestedManyWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([z.lazy(() => ArticleCreateWithoutTagInputSchema), z.lazy(() => ArticleCreateWithoutTagInputSchema).array(), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArticleCreateOrConnectWithoutTagInputSchema), z.lazy(() => ArticleCreateOrConnectWithoutTagInputSchema).array()]).optional(),
  createMany: z.lazy(() => ArticleCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const ArticleUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([z.lazy(() => ArticleCreateWithoutTagInputSchema), z.lazy(() => ArticleCreateWithoutTagInputSchema).array(), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArticleCreateOrConnectWithoutTagInputSchema), z.lazy(() => ArticleCreateOrConnectWithoutTagInputSchema).array()]).optional(),
  createMany: z.lazy(() => ArticleCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const ArticleUpdateManyWithoutTagNestedInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([z.lazy(() => ArticleCreateWithoutTagInputSchema), z.lazy(() => ArticleCreateWithoutTagInputSchema).array(), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArticleCreateOrConnectWithoutTagInputSchema), z.lazy(() => ArticleCreateOrConnectWithoutTagInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ArticleUpsertWithWhereUniqueWithoutTagInputSchema), z.lazy(() => ArticleUpsertWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
  createMany: z.lazy(() => ArticleCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ArticleUpdateWithWhereUniqueWithoutTagInputSchema), z.lazy(() => ArticleUpdateWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ArticleUpdateManyWithWhereWithoutTagInputSchema), z.lazy(() => ArticleUpdateManyWithWhereWithoutTagInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ArticleScalarWhereInputSchema), z.lazy(() => ArticleScalarWhereInputSchema).array()]).optional(),
}).strict();

export const ArticleUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([z.lazy(() => ArticleCreateWithoutTagInputSchema), z.lazy(() => ArticleCreateWithoutTagInputSchema).array(), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArticleCreateOrConnectWithoutTagInputSchema), z.lazy(() => ArticleCreateOrConnectWithoutTagInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ArticleUpsertWithWhereUniqueWithoutTagInputSchema), z.lazy(() => ArticleUpsertWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
  createMany: z.lazy(() => ArticleCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ArticleWhereUniqueInputSchema), z.lazy(() => ArticleWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ArticleUpdateWithWhereUniqueWithoutTagInputSchema), z.lazy(() => ArticleUpdateWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ArticleUpdateManyWithWhereWithoutTagInputSchema), z.lazy(() => ArticleUpdateManyWithWhereWithoutTagInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ArticleScalarWhereInputSchema), z.lazy(() => ArticleScalarWhereInputSchema).array()]).optional(),
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

export const NestedEnumPublishStatusFilterSchema: z.ZodType<PrismaClient.Prisma.NestedEnumPublishStatusFilter> = z.object({
  equals: z.lazy(() => PublishStatusSchema).optional(),
  in: z.lazy(() => PublishStatusSchema).array().optional(),
  notIn: z.lazy(() => PublishStatusSchema).array().optional(),
  not: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => NestedEnumPublishStatusFilterSchema)]).optional(),
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

export const NestedEnumPublishStatusWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedEnumPublishStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PublishStatusSchema).optional(),
  in: z.lazy(() => PublishStatusSchema).array().optional(),
  notIn: z.lazy(() => PublishStatusSchema).array().optional(),
  not: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => NestedEnumPublishStatusWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPublishStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPublishStatusFilterSchema).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
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

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
}).strict();

export const ModuleCreateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateWithoutCourseInput> = z.object({
  title: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  sortOrder: z.number().optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutModuleInputSchema).optional(),
}).strict();

export const ModuleUncheckedCreateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  sortOrder: z.number().optional(),
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

export const LessonCreateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateWithoutCourseInput> = z.object({
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().optional(),
  videoUrl: z.string().optional().nullable(),
  module: z.lazy(() => ModuleCreateNestedOneWithoutLessonsInputSchema).optional(),
}).strict();

export const LessonUncheckedCreateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateWithoutCourseInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  moduleId: z.number().optional().nullable(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().optional(),
  videoUrl: z.string().optional().nullable(),
}).strict();

export const LessonCreateOrConnectWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateOrConnectWithoutCourseInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  create: z.union([z.lazy(() => LessonCreateWithoutCourseInputSchema), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema)]),
}).strict();

export const LessonCreateManyCourseInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyCourseInputEnvelope> = z.object({
  data: z.lazy(() => LessonCreateManyCourseInputSchema).array(),
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
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  courseId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
}).strict();

export const LessonUpsertWithWhereUniqueWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpsertWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  update: z.union([z.lazy(() => LessonUpdateWithoutCourseInputSchema), z.lazy(() => LessonUncheckedUpdateWithoutCourseInputSchema)]),
  create: z.union([z.lazy(() => LessonCreateWithoutCourseInputSchema), z.lazy(() => LessonUncheckedCreateWithoutCourseInputSchema)]),
}).strict();

export const LessonUpdateWithWhereUniqueWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateWithWhereUniqueWithoutCourseInput> = z.object({
  where: z.lazy(() => LessonWhereUniqueInputSchema),
  data: z.union([z.lazy(() => LessonUpdateWithoutCourseInputSchema), z.lazy(() => LessonUncheckedUpdateWithoutCourseInputSchema)]),
}).strict();

export const LessonUpdateManyWithWhereWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateManyWithWhereWithoutCourseInput> = z.object({
  where: z.lazy(() => LessonScalarWhereInputSchema),
  data: z.union([z.lazy(() => LessonUpdateManyMutationInputSchema), z.lazy(() => LessonUncheckedUpdateManyWithoutLessonsInputSchema)]),
}).strict();

export const LessonScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.LessonScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => LessonScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => LessonScalarWhereInputSchema), z.lazy(() => LessonScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  contentType: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  moduleId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  isFree: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  videoUrl: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  courseId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
}).strict();

export const LessonCreateWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateWithoutModuleInput> = z.object({
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().optional(),
  videoUrl: z.string().optional().nullable(),
  course: z.lazy(() => CourseCreateNestedOneWithoutLessonsInputSchema).optional(),
}).strict();

export const LessonUncheckedCreateWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedCreateWithoutModuleInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().optional(),
  videoUrl: z.string().optional().nullable(),
  courseId: z.number().optional().nullable(),
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
  description: z.string().optional().nullable(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  lessons: z.lazy(() => LessonCreateNestedManyWithoutCourseInputSchema).optional(),
}).strict();

export const CourseUncheckedCreateWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedCreateWithoutModulesInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  lessons: z.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
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

export const CourseUpsertWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpsertWithoutModulesInput> = z.object({
  update: z.union([z.lazy(() => CourseUpdateWithoutModulesInputSchema), z.lazy(() => CourseUncheckedUpdateWithoutModulesInputSchema)]),
  create: z.union([z.lazy(() => CourseCreateWithoutModulesInputSchema), z.lazy(() => CourseUncheckedCreateWithoutModulesInputSchema)]),
}).strict();

export const CourseUpdateWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateWithoutModulesInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutCourseNestedInputSchema).optional(),
}).strict();

export const CourseUncheckedUpdateWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedUpdateWithoutModulesInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
}).strict();

export const ModuleCreateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateWithoutLessonsInput> = z.object({
  title: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  sortOrder: z.number().optional(),
  course: z.lazy(() => CourseCreateNestedOneWithoutModulesInputSchema),
}).strict();

export const ModuleUncheckedCreateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedCreateWithoutLessonsInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  sortOrder: z.number().optional(),
  courseId: z.number(),
}).strict();

export const ModuleCreateOrConnectWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateOrConnectWithoutLessonsInput> = z.object({
  where: z.lazy(() => ModuleWhereUniqueInputSchema),
  create: z.union([z.lazy(() => ModuleCreateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutLessonsInputSchema)]),
}).strict();

export const CourseCreateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateWithoutLessonsInput> = z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  modules: z.lazy(() => ModuleCreateNestedManyWithoutCourseInputSchema).optional(),
}).strict();

export const CourseUncheckedCreateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedCreateWithoutLessonsInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  slug: z.string(),
  stripeProductId: z.string().optional().nullable(),
  lastRevised: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  modules: z.lazy(() => ModuleUncheckedCreateNestedManyWithoutCourseInputSchema).optional(),
}).strict();

export const CourseCreateOrConnectWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.CourseCreateOrConnectWithoutLessonsInput> = z.object({
  where: z.lazy(() => CourseWhereUniqueInputSchema),
  create: z.union([z.lazy(() => CourseCreateWithoutLessonsInputSchema), z.lazy(() => CourseUncheckedCreateWithoutLessonsInputSchema)]),
}).strict();

export const ModuleUpsertWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpsertWithoutLessonsInput> = z.object({
  update: z.union([z.lazy(() => ModuleUpdateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutLessonsInputSchema)]),
  create: z.union([z.lazy(() => ModuleCreateWithoutLessonsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutLessonsInputSchema)]),
}).strict();

export const ModuleUpdateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateWithoutLessonsInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  course: z.lazy(() => CourseUpdateOneRequiredWithoutModulesNestedInputSchema).optional(),
}).strict();

export const ModuleUncheckedUpdateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateWithoutLessonsInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  courseId: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const CourseUpsertWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpsertWithoutLessonsInput> = z.object({
  update: z.union([z.lazy(() => CourseUpdateWithoutLessonsInputSchema), z.lazy(() => CourseUncheckedUpdateWithoutLessonsInputSchema)]),
  create: z.union([z.lazy(() => CourseCreateWithoutLessonsInputSchema), z.lazy(() => CourseUncheckedCreateWithoutLessonsInputSchema)]),
}).strict();

export const CourseUpdateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.CourseUpdateWithoutLessonsInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  modules: z.lazy(() => ModuleUpdateManyWithoutCourseNestedInputSchema).optional(),
}).strict();

export const CourseUncheckedUpdateWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.CourseUncheckedUpdateWithoutLessonsInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  stripeProductId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  lastRevised: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  modules: z.lazy(() => ModuleUncheckedUpdateManyWithoutCourseNestedInputSchema).optional(),
}).strict();

export const TagCreateWithoutArticlesInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateWithoutArticlesInput> = z.object({
  name: z.string(),
}).strict();

export const TagUncheckedCreateWithoutArticlesInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedCreateWithoutArticlesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
}).strict();

export const TagCreateOrConnectWithoutArticlesInputSchema: z.ZodType<PrismaClient.Prisma.TagCreateOrConnectWithoutArticlesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([z.lazy(() => TagCreateWithoutArticlesInputSchema), z.lazy(() => TagUncheckedCreateWithoutArticlesInputSchema)]),
}).strict();

export const TagUpsertWithoutArticlesInputSchema: z.ZodType<PrismaClient.Prisma.TagUpsertWithoutArticlesInput> = z.object({
  update: z.union([z.lazy(() => TagUpdateWithoutArticlesInputSchema), z.lazy(() => TagUncheckedUpdateWithoutArticlesInputSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutArticlesInputSchema), z.lazy(() => TagUncheckedCreateWithoutArticlesInputSchema)]),
}).strict();

export const TagUpdateWithoutArticlesInputSchema: z.ZodType<PrismaClient.Prisma.TagUpdateWithoutArticlesInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const TagUncheckedUpdateWithoutArticlesInputSchema: z.ZodType<PrismaClient.Prisma.TagUncheckedUpdateWithoutArticlesInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ArticleCreateWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateWithoutTagInput> = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}).strict();

export const ArticleUncheckedCreateWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUncheckedCreateWithoutTagInput> = z.object({
  id: z.number().optional(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}).strict();

export const ArticleCreateOrConnectWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  create: z.union([z.lazy(() => ArticleCreateWithoutTagInputSchema), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema)]),
}).strict();

export const ArticleCreateManyTagInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateManyTagInputEnvelope> = z.object({
  data: z.lazy(() => ArticleCreateManyTagInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ArticleUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  update: z.union([z.lazy(() => ArticleUpdateWithoutTagInputSchema), z.lazy(() => ArticleUncheckedUpdateWithoutTagInputSchema)]),
  create: z.union([z.lazy(() => ArticleCreateWithoutTagInputSchema), z.lazy(() => ArticleUncheckedCreateWithoutTagInputSchema)]),
}).strict();

export const ArticleUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  data: z.union([z.lazy(() => ArticleUpdateWithoutTagInputSchema), z.lazy(() => ArticleUncheckedUpdateWithoutTagInputSchema)]),
}).strict();

export const ArticleUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => ArticleScalarWhereInputSchema),
  data: z.union([z.lazy(() => ArticleUpdateManyMutationInputSchema), z.lazy(() => ArticleUncheckedUpdateManyWithoutArticlesInputSchema)]),
}).strict();

export const ArticleScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.ArticleScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => ArticleScalarWhereInputSchema), z.lazy(() => ArticleScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ArticleScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArticleScalarWhereInputSchema), z.lazy(() => ArticleScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumPublishStatusFilterSchema), z.lazy(() => PublishStatusSchema)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  tagId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
}).strict();

export const ModuleCreateManyCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  sortOrder: z.number().optional(),
}).strict();

export const LessonCreateManyCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyCourseInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  moduleId: z.number().optional().nullable(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().optional(),
  videoUrl: z.string().optional().nullable(),
}).strict();

export const ModuleUpdateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUpdateWithoutCourseInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUpdateManyWithoutModuleNestedInputSchema).optional(),
}).strict();

export const ModuleUncheckedUpdateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  lessons: z.lazy(() => LessonUncheckedUpdateManyWithoutModuleNestedInputSchema).optional(),
}).strict();

export const ModuleUncheckedUpdateManyWithoutModulesInputSchema: z.ZodType<PrismaClient.Prisma.ModuleUncheckedUpdateManyWithoutModulesInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const LessonUpdateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateWithoutCourseInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  module: z.lazy(() => ModuleUpdateOneWithoutLessonsNestedInputSchema).optional(),
}).strict();

export const LessonUncheckedUpdateWithoutCourseInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateWithoutCourseInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  moduleId: z.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const LessonUncheckedUpdateManyWithoutLessonsInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateManyWithoutLessonsInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  moduleId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const LessonCreateManyModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonCreateManyModuleInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  contentType: z.string().optional(),
  isFree: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  videoUrl: z.string().optional().nullable(),
  courseId: z.number().int().optional().nullable(),
}).strict();

export const LessonUpdateWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUpdateWithoutModuleInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  course: z.lazy(() => CourseUpdateOneWithoutLessonsNestedInputSchema).optional(),
}).strict();

export const LessonUncheckedUpdateWithoutModuleInputSchema: z.ZodType<PrismaClient.Prisma.LessonUncheckedUpdateWithoutModuleInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  contentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  isFree: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sortOrder: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  videoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  courseId: z.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const ArticleCreateManyTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateManyTagInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  status: z.lazy(() => PublishStatusSchema).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}).strict();

export const ArticleUpdateWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUpdateWithoutTagInput> = z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ArticleUncheckedUpdateWithoutTagInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUncheckedUpdateWithoutTagInput> = z.object({
  id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ArticleUncheckedUpdateManyWithoutArticlesInputSchema: z.ZodType<PrismaClient.Prisma.ArticleUncheckedUpdateManyWithoutArticlesInput> = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => PublishStatusSchema), z.lazy(() => EnumPublishStatusFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
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

export const ArticleFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleFindFirstArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ArticleOrderByWithRelationInputSchema.array(), ArticleOrderByWithRelationInputSchema]).optional(),
  cursor: ArticleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ArticleScalarFieldEnumSchema.array().optional(),
}).strict();

export const ArticleFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleFindFirstOrThrowArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ArticleOrderByWithRelationInputSchema.array(), ArticleOrderByWithRelationInputSchema]).optional(),
  cursor: ArticleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ArticleScalarFieldEnumSchema.array().optional(),
}).strict();

export const ArticleFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleFindManyArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ArticleOrderByWithRelationInputSchema.array(), ArticleOrderByWithRelationInputSchema]).optional(),
  cursor: ArticleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ArticleScalarFieldEnumSchema.array().optional(),
}).strict();

export const ArticleAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleAggregateArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ArticleOrderByWithRelationInputSchema.array(), ArticleOrderByWithRelationInputSchema]).optional(),
  cursor: ArticleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ArticleGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleGroupByArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ArticleOrderByWithAggregationInputSchema.array(), ArticleOrderByWithAggregationInputSchema]).optional(),
  by: ArticleScalarFieldEnumSchema.array(),
  having: ArticleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ArticleFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleFindUniqueArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereUniqueInputSchema,
}).strict();

export const ArticleFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleFindUniqueOrThrowArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereUniqueInputSchema,
}).strict();

export const TagFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindFirstArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const TagFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindFirstOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const TagFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindManyArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TagScalarFieldEnumSchema.array().optional(),
}).strict();

export const TagAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.TagAggregateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TagGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.TagGroupByArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithAggregationInputSchema.array(), TagOrderByWithAggregationInputSchema]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TagFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindUniqueArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict();

export const TagFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.TagFindUniqueOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
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

export const ArticleCreateArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  data: z.union([ArticleCreateInputSchema, ArticleUncheckedCreateInputSchema]),
}).strict();

export const ArticleUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleUpsertArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereUniqueInputSchema,
  create: z.union([ArticleCreateInputSchema, ArticleUncheckedCreateInputSchema]),
  update: z.union([ArticleUpdateInputSchema, ArticleUncheckedUpdateInputSchema]),
}).strict();

export const ArticleCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleCreateManyArgs> = z.object({
  data: ArticleCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ArticleDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleDeleteArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereUniqueInputSchema,
}).strict();

export const ArticleUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleUpdateArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  data: z.union([ArticleUpdateInputSchema, ArticleUncheckedUpdateInputSchema]),
  where: ArticleWhereUniqueInputSchema,
}).strict();

export const ArticleUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleUpdateManyArgs> = z.object({
  data: z.union([ArticleUpdateManyMutationInputSchema, ArticleUncheckedUpdateManyInputSchema]),
  where: ArticleWhereInputSchema.optional(),
}).strict();

export const ArticleDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.ArticleDeleteManyArgs> = z.object({
  where: ArticleWhereInputSchema.optional(),
}).strict();

export const TagCreateArgsSchema: z.ZodType<PrismaClient.Prisma.TagCreateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([TagCreateInputSchema, TagUncheckedCreateInputSchema]),
}).strict();

export const TagUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([TagCreateInputSchema, TagUncheckedCreateInputSchema]),
  update: z.union([TagUpdateInputSchema, TagUncheckedUpdateInputSchema]),
}).strict();

export const TagCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.TagCreateManyArgs> = z.object({
  data: TagCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const TagDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.TagDeleteArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict();

export const TagUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.TagUpdateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([TagUpdateInputSchema, TagUncheckedUpdateInputSchema]),
  where: TagWhereUniqueInputSchema,
}).strict();

export const TagUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([TagUpdateManyMutationInputSchema, TagUncheckedUpdateManyInputSchema]),
  where: TagWhereInputSchema.optional(),
}).strict();

export const TagDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
}).strict();
