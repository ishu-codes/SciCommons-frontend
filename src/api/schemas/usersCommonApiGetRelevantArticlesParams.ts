/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { UsersCommonApiGetRelevantArticlesFilterType } from './usersCommonApiGetRelevantArticlesFilterType';

export type UsersCommonApiGetRelevantArticlesParams = {
  filter_type: UsersCommonApiGetRelevantArticlesFilterType;
  article_id?: number | null;
  limit?: number;
  offset?: number;
  community_id?: number | null;
};