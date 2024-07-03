/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import { customInstance } from '.././custom-instance';
import type { ErrorType } from '.././custom-instance';
import type {
  ArticleDetails,
  Message,
  NotificationSchema,
  UsersApiGetMyArticlesParams,
} from '.././schemas';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get My Articles
 */
export const usersApiGetMyArticles = (
  params?: UsersApiGetMyArticlesParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ArticleDetails[]>(
    { url: `/api/users/my-articles`, method: 'GET', params, signal },
    options
  );
};

export const getUsersApiGetMyArticlesQueryKey = (params?: UsersApiGetMyArticlesParams) => {
  return [`/api/users/my-articles`, ...(params ? [params] : [])] as const;
};

export const getUsersApiGetMyArticlesQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetMyArticles>>,
  TError = ErrorType<Message>,
>(
  params?: UsersApiGetMyArticlesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyArticles>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetMyArticlesQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetMyArticles>>> = ({ signal }) =>
    usersApiGetMyArticles(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetMyArticles>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetMyArticlesQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetMyArticles>>
>;
export type UsersApiGetMyArticlesQueryError = ErrorType<Message>;

/**
 * @summary Get My Articles
 */
export const useUsersApiGetMyArticles = <
  TData = Awaited<ReturnType<typeof usersApiGetMyArticles>>,
  TError = ErrorType<Message>,
>(
  params?: UsersApiGetMyArticlesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyArticles>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetMyArticlesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get Notifications
 */
export const usersApiGetNotifications = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<NotificationSchema[]>(
    { url: `/api/users/notifications`, method: 'GET', signal },
    options
  );
};

export const getUsersApiGetNotificationsQueryKey = () => {
  return [`/api/users/notifications`] as const;
};

export const getUsersApiGetNotificationsQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetNotifications>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersApiGetNotifications>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetNotificationsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetNotifications>>> = ({
    signal,
  }) => usersApiGetNotifications(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetNotifications>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetNotificationsQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetNotifications>>
>;
export type UsersApiGetNotificationsQueryError = ErrorType<Message>;

/**
 * @summary Get Notifications
 */
export const useUsersApiGetNotifications = <
  TData = Awaited<ReturnType<typeof usersApiGetNotifications>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersApiGetNotifications>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetNotificationsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Mark Notification As Read
 */
export const usersApiMarkNotificationAsRead = (
  notificationId: number,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<Message>(
    { url: `/api/users/notifications/${notificationId}/mark-as-read`, method: 'POST' },
    options
  );
};

export const getUsersApiMarkNotificationAsReadMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
    TError,
    { notificationId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
  TError,
  { notificationId: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
    { notificationId: number }
  > = (props) => {
    const { notificationId } = props ?? {};

    return usersApiMarkNotificationAsRead(notificationId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersApiMarkNotificationAsReadMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>
>;

export type UsersApiMarkNotificationAsReadMutationError = ErrorType<Message>;

/**
 * @summary Mark Notification As Read
 */
export const useUsersApiMarkNotificationAsRead = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
    TError,
    { notificationId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
  TError,
  { notificationId: number },
  TContext
> => {
  const mutationOptions = getUsersApiMarkNotificationAsReadMutationOptions(options);

  return useMutation(mutationOptions);
};
