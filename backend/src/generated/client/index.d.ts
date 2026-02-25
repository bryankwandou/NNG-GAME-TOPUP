
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Reseller
 * 
 */
export type Reseller = $Result.DefaultSelection<Prisma.$ResellerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model TierPrice
 * 
 */
export type TierPrice = $Result.DefaultSelection<Prisma.$TierPricePayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model DailySummary
 * 
 */
export type DailySummary = $Result.DefaultSelection<Prisma.$DailySummaryPayload>
/**
 * Model MonthlySummary
 * 
 */
export type MonthlySummary = $Result.DefaultSelection<Prisma.$MonthlySummaryPayload>
/**
 * Model WebhookLog
 * 
 */
export type WebhookLog = $Result.DefaultSelection<Prisma.$WebhookLogPayload>
/**
 * Model ProductPricing
 * 
 */
export type ProductPricing = $Result.DefaultSelection<Prisma.$ProductPricingPayload>
/**
 * Model SupplierPanel
 * 
 */
export type SupplierPanel = $Result.DefaultSelection<Prisma.$SupplierPanelPayload>
/**
 * Model SupplierProduct
 * 
 */
export type SupplierProduct = $Result.DefaultSelection<Prisma.$SupplierProductPayload>
/**
 * Model SupplierHealthMetric
 * 
 */
export type SupplierHealthMetric = $Result.DefaultSelection<Prisma.$SupplierHealthMetricPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ResellerTier: {
  BRONZE: 'BRONZE',
  SILVER: 'SILVER',
  GOLD: 'GOLD',
  AGENCY: 'AGENCY'
};

export type ResellerTier = (typeof ResellerTier)[keyof typeof ResellerTier]


export const ResellerStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  BANNED: 'BANNED'
};

export type ResellerStatus = (typeof ResellerStatus)[keyof typeof ResellerStatus]


export const PaymentChannel: {
  QRIS: 'QRIS',
  VIRTUAL_ACCOUNT: 'VIRTUAL_ACCOUNT',
  BANK_TRANSFER: 'BANK_TRANSFER',
  E_WALLET: 'E_WALLET'
};

export type PaymentChannel = (typeof PaymentChannel)[keyof typeof PaymentChannel]


export const DepositStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  EXPIRED: 'EXPIRED',
  CANCELED: 'CANCELED'
};

export type DepositStatus = (typeof DepositStatus)[keyof typeof DepositStatus]


export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  PARTIAL_SUCCESS: 'PARTIAL_SUCCESS'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type ResellerTier = $Enums.ResellerTier

export const ResellerTier: typeof $Enums.ResellerTier

export type ResellerStatus = $Enums.ResellerStatus

export const ResellerStatus: typeof $Enums.ResellerStatus

export type PaymentChannel = $Enums.PaymentChannel

export const PaymentChannel: typeof $Enums.PaymentChannel

export type DepositStatus = $Enums.DepositStatus

export const DepositStatus: typeof $Enums.DepositStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Resellers
 * const resellers = await prisma.reseller.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Resellers
   * const resellers = await prisma.reseller.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.reseller`: Exposes CRUD operations for the **Reseller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resellers
    * const resellers = await prisma.reseller.findMany()
    * ```
    */
  get reseller(): Prisma.ResellerDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.tierPrice`: Exposes CRUD operations for the **TierPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TierPrices
    * const tierPrices = await prisma.tierPrice.findMany()
    * ```
    */
  get tierPrice(): Prisma.TierPriceDelegate<ExtArgs>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.dailySummary`: Exposes CRUD operations for the **DailySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailySummaries
    * const dailySummaries = await prisma.dailySummary.findMany()
    * ```
    */
  get dailySummary(): Prisma.DailySummaryDelegate<ExtArgs>;

  /**
   * `prisma.monthlySummary`: Exposes CRUD operations for the **MonthlySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlySummaries
    * const monthlySummaries = await prisma.monthlySummary.findMany()
    * ```
    */
  get monthlySummary(): Prisma.MonthlySummaryDelegate<ExtArgs>;

  /**
   * `prisma.webhookLog`: Exposes CRUD operations for the **WebhookLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookLogs
    * const webhookLogs = await prisma.webhookLog.findMany()
    * ```
    */
  get webhookLog(): Prisma.WebhookLogDelegate<ExtArgs>;

  /**
   * `prisma.productPricing`: Exposes CRUD operations for the **ProductPricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPricings
    * const productPricings = await prisma.productPricing.findMany()
    * ```
    */
  get productPricing(): Prisma.ProductPricingDelegate<ExtArgs>;

  /**
   * `prisma.supplierPanel`: Exposes CRUD operations for the **SupplierPanel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierPanels
    * const supplierPanels = await prisma.supplierPanel.findMany()
    * ```
    */
  get supplierPanel(): Prisma.SupplierPanelDelegate<ExtArgs>;

  /**
   * `prisma.supplierProduct`: Exposes CRUD operations for the **SupplierProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierProducts
    * const supplierProducts = await prisma.supplierProduct.findMany()
    * ```
    */
  get supplierProduct(): Prisma.SupplierProductDelegate<ExtArgs>;

  /**
   * `prisma.supplierHealthMetric`: Exposes CRUD operations for the **SupplierHealthMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierHealthMetrics
    * const supplierHealthMetrics = await prisma.supplierHealthMetric.findMany()
    * ```
    */
  get supplierHealthMetric(): Prisma.SupplierHealthMetricDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Reseller: 'Reseller',
    Product: 'Product',
    TierPrice: 'TierPrice',
    Deposit: 'Deposit',
    Order: 'Order',
    Transaction: 'Transaction',
    AdminUser: 'AdminUser',
    AuditLog: 'AuditLog',
    DailySummary: 'DailySummary',
    MonthlySummary: 'MonthlySummary',
    WebhookLog: 'WebhookLog',
    ProductPricing: 'ProductPricing',
    SupplierPanel: 'SupplierPanel',
    SupplierProduct: 'SupplierProduct',
    SupplierHealthMetric: 'SupplierHealthMetric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "reseller" | "product" | "tierPrice" | "deposit" | "order" | "transaction" | "adminUser" | "auditLog" | "dailySummary" | "monthlySummary" | "webhookLog" | "productPricing" | "supplierPanel" | "supplierProduct" | "supplierHealthMetric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Reseller: {
        payload: Prisma.$ResellerPayload<ExtArgs>
        fields: Prisma.ResellerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResellerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResellerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload>
          }
          findFirst: {
            args: Prisma.ResellerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResellerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload>
          }
          findMany: {
            args: Prisma.ResellerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload>[]
          }
          create: {
            args: Prisma.ResellerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload>
          }
          createMany: {
            args: Prisma.ResellerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResellerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload>[]
          }
          delete: {
            args: Prisma.ResellerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload>
          }
          update: {
            args: Prisma.ResellerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload>
          }
          deleteMany: {
            args: Prisma.ResellerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResellerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResellerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellerPayload>
          }
          aggregate: {
            args: Prisma.ResellerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReseller>
          }
          groupBy: {
            args: Prisma.ResellerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResellerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResellerCountArgs<ExtArgs>
            result: $Utils.Optional<ResellerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      TierPrice: {
        payload: Prisma.$TierPricePayload<ExtArgs>
        fields: Prisma.TierPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TierPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TierPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload>
          }
          findFirst: {
            args: Prisma.TierPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TierPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload>
          }
          findMany: {
            args: Prisma.TierPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload>[]
          }
          create: {
            args: Prisma.TierPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload>
          }
          createMany: {
            args: Prisma.TierPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TierPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload>[]
          }
          delete: {
            args: Prisma.TierPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload>
          }
          update: {
            args: Prisma.TierPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload>
          }
          deleteMany: {
            args: Prisma.TierPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TierPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TierPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TierPricePayload>
          }
          aggregate: {
            args: Prisma.TierPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTierPrice>
          }
          groupBy: {
            args: Prisma.TierPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TierPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TierPriceCountArgs<ExtArgs>
            result: $Utils.Optional<TierPriceCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      DailySummary: {
        payload: Prisma.$DailySummaryPayload<ExtArgs>
        fields: Prisma.DailySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          findFirst: {
            args: Prisma.DailySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          findMany: {
            args: Prisma.DailySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>[]
          }
          create: {
            args: Prisma.DailySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          createMany: {
            args: Prisma.DailySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailySummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>[]
          }
          delete: {
            args: Prisma.DailySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          update: {
            args: Prisma.DailySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          deleteMany: {
            args: Prisma.DailySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          aggregate: {
            args: Prisma.DailySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailySummary>
          }
          groupBy: {
            args: Prisma.DailySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<DailySummaryCountAggregateOutputType> | number
          }
        }
      }
      MonthlySummary: {
        payload: Prisma.$MonthlySummaryPayload<ExtArgs>
        fields: Prisma.MonthlySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload>
          }
          findFirst: {
            args: Prisma.MonthlySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload>
          }
          findMany: {
            args: Prisma.MonthlySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload>[]
          }
          create: {
            args: Prisma.MonthlySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload>
          }
          createMany: {
            args: Prisma.MonthlySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlySummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload>[]
          }
          delete: {
            args: Prisma.MonthlySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload>
          }
          update: {
            args: Prisma.MonthlySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload>
          }
          deleteMany: {
            args: Prisma.MonthlySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySummaryPayload>
          }
          aggregate: {
            args: Prisma.MonthlySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlySummary>
          }
          groupBy: {
            args: Prisma.MonthlySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlySummaryCountAggregateOutputType> | number
          }
        }
      }
      WebhookLog: {
        payload: Prisma.$WebhookLogPayload<ExtArgs>
        fields: Prisma.WebhookLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findFirst: {
            args: Prisma.WebhookLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findMany: {
            args: Prisma.WebhookLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          create: {
            args: Prisma.WebhookLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          createMany: {
            args: Prisma.WebhookLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          delete: {
            args: Prisma.WebhookLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          update: {
            args: Prisma.WebhookLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          deleteMany: {
            args: Prisma.WebhookLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebhookLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          aggregate: {
            args: Prisma.WebhookLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookLog>
          }
          groupBy: {
            args: Prisma.WebhookLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookLogCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogCountAggregateOutputType> | number
          }
        }
      }
      ProductPricing: {
        payload: Prisma.$ProductPricingPayload<ExtArgs>
        fields: Prisma.ProductPricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload>
          }
          findFirst: {
            args: Prisma.ProductPricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload>
          }
          findMany: {
            args: Prisma.ProductPricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload>[]
          }
          create: {
            args: Prisma.ProductPricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload>
          }
          createMany: {
            args: Prisma.ProductPricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPricingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload>[]
          }
          delete: {
            args: Prisma.ProductPricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload>
          }
          update: {
            args: Prisma.ProductPricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload>
          }
          deleteMany: {
            args: Prisma.ProductPricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductPricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPricingPayload>
          }
          aggregate: {
            args: Prisma.ProductPricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPricing>
          }
          groupBy: {
            args: Prisma.ProductPricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPricingCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPricingCountAggregateOutputType> | number
          }
        }
      }
      SupplierPanel: {
        payload: Prisma.$SupplierPanelPayload<ExtArgs>
        fields: Prisma.SupplierPanelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierPanelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierPanelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload>
          }
          findFirst: {
            args: Prisma.SupplierPanelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierPanelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload>
          }
          findMany: {
            args: Prisma.SupplierPanelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload>[]
          }
          create: {
            args: Prisma.SupplierPanelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload>
          }
          createMany: {
            args: Prisma.SupplierPanelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierPanelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload>[]
          }
          delete: {
            args: Prisma.SupplierPanelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload>
          }
          update: {
            args: Prisma.SupplierPanelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload>
          }
          deleteMany: {
            args: Prisma.SupplierPanelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierPanelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierPanelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPanelPayload>
          }
          aggregate: {
            args: Prisma.SupplierPanelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierPanel>
          }
          groupBy: {
            args: Prisma.SupplierPanelGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierPanelGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierPanelCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierPanelCountAggregateOutputType> | number
          }
        }
      }
      SupplierProduct: {
        payload: Prisma.$SupplierProductPayload<ExtArgs>
        fields: Prisma.SupplierProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          findFirst: {
            args: Prisma.SupplierProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          findMany: {
            args: Prisma.SupplierProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>[]
          }
          create: {
            args: Prisma.SupplierProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          createMany: {
            args: Prisma.SupplierProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>[]
          }
          delete: {
            args: Prisma.SupplierProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          update: {
            args: Prisma.SupplierProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          deleteMany: {
            args: Prisma.SupplierProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierProductPayload>
          }
          aggregate: {
            args: Prisma.SupplierProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierProduct>
          }
          groupBy: {
            args: Prisma.SupplierProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierProductCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierProductCountAggregateOutputType> | number
          }
        }
      }
      SupplierHealthMetric: {
        payload: Prisma.$SupplierHealthMetricPayload<ExtArgs>
        fields: Prisma.SupplierHealthMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierHealthMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierHealthMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload>
          }
          findFirst: {
            args: Prisma.SupplierHealthMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierHealthMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload>
          }
          findMany: {
            args: Prisma.SupplierHealthMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload>[]
          }
          create: {
            args: Prisma.SupplierHealthMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload>
          }
          createMany: {
            args: Prisma.SupplierHealthMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierHealthMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload>[]
          }
          delete: {
            args: Prisma.SupplierHealthMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload>
          }
          update: {
            args: Prisma.SupplierHealthMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload>
          }
          deleteMany: {
            args: Prisma.SupplierHealthMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierHealthMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierHealthMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierHealthMetricPayload>
          }
          aggregate: {
            args: Prisma.SupplierHealthMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierHealthMetric>
          }
          groupBy: {
            args: Prisma.SupplierHealthMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierHealthMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierHealthMetricCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierHealthMetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ResellerCountOutputType
   */

  export type ResellerCountOutputType = {
    referrals: number
    orders: number
    deposits: number
    auditLogs: number
  }

  export type ResellerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | ResellerCountOutputTypeCountReferralsArgs
    orders?: boolean | ResellerCountOutputTypeCountOrdersArgs
    deposits?: boolean | ResellerCountOutputTypeCountDepositsArgs
    auditLogs?: boolean | ResellerCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * ResellerCountOutputType without action
   */
  export type ResellerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellerCountOutputType
     */
    select?: ResellerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResellerCountOutputType without action
   */
  export type ResellerCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellerWhereInput
  }

  /**
   * ResellerCountOutputType without action
   */
  export type ResellerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ResellerCountOutputType without action
   */
  export type ResellerCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }

  /**
   * ResellerCountOutputType without action
   */
  export type ResellerCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orders: number
    tierPrices: number
    pricingHistory: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProductCountOutputTypeCountOrdersArgs
    tierPrices?: boolean | ProductCountOutputTypeCountTierPricesArgs
    pricingHistory?: boolean | ProductCountOutputTypeCountPricingHistoryArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTierPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TierPriceWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPricingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPricingWhereInput
  }


  /**
   * Count Type DepositCountOutputType
   */

  export type DepositCountOutputType = {
    transactions: number
  }

  export type DepositCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | DepositCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * DepositCountOutputType without action
   */
  export type DepositCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositCountOutputType
     */
    select?: DepositCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepositCountOutputType without action
   */
  export type DepositCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    transactions: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | OrderCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type SupplierPanelCountOutputType
   */

  export type SupplierPanelCountOutputType = {
    products: number
    healthMetrics: number
  }

  export type SupplierPanelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SupplierPanelCountOutputTypeCountProductsArgs
    healthMetrics?: boolean | SupplierPanelCountOutputTypeCountHealthMetricsArgs
  }

  // Custom InputTypes
  /**
   * SupplierPanelCountOutputType without action
   */
  export type SupplierPanelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanelCountOutputType
     */
    select?: SupplierPanelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierPanelCountOutputType without action
   */
  export type SupplierPanelCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierProductWhereInput
  }

  /**
   * SupplierPanelCountOutputType without action
   */
  export type SupplierPanelCountOutputTypeCountHealthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierHealthMetricWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Reseller
   */

  export type AggregateReseller = {
    _count: ResellerCountAggregateOutputType | null
    _avg: ResellerAvgAggregateOutputType | null
    _sum: ResellerSumAggregateOutputType | null
    _min: ResellerMinAggregateOutputType | null
    _max: ResellerMaxAggregateOutputType | null
  }

  export type ResellerAvgAggregateOutputType = {
    balance: number | null
    monthlyTurnover: number | null
    totalTurnoverAllTime: number | null
  }

  export type ResellerSumAggregateOutputType = {
    balance: bigint | null
    monthlyTurnover: bigint | null
    totalTurnoverAllTime: bigint | null
  }

  export type ResellerMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    tier: $Enums.ResellerTier | null
    status: $Enums.ResellerStatus | null
    balance: bigint | null
    monthlyTurnover: bigint | null
    totalTurnoverAllTime: bigint | null
    discordUserId: string | null
    telegramUserId: string | null
    whatsappPhoneNumber: string | null
    referrerId: string | null
    isVerified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResellerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    tier: $Enums.ResellerTier | null
    status: $Enums.ResellerStatus | null
    balance: bigint | null
    monthlyTurnover: bigint | null
    totalTurnoverAllTime: bigint | null
    discordUserId: string | null
    telegramUserId: string | null
    whatsappPhoneNumber: string | null
    referrerId: string | null
    isVerified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResellerCountAggregateOutputType = {
    id: number
    email: number
    username: number
    name: number
    tier: number
    status: number
    balance: number
    monthlyTurnover: number
    totalTurnoverAllTime: number
    discordUserId: number
    telegramUserId: number
    whatsappPhoneNumber: number
    referrerId: number
    isVerified: number
    verifiedAt: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResellerAvgAggregateInputType = {
    balance?: true
    monthlyTurnover?: true
    totalTurnoverAllTime?: true
  }

  export type ResellerSumAggregateInputType = {
    balance?: true
    monthlyTurnover?: true
    totalTurnoverAllTime?: true
  }

  export type ResellerMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    tier?: true
    status?: true
    balance?: true
    monthlyTurnover?: true
    totalTurnoverAllTime?: true
    discordUserId?: true
    telegramUserId?: true
    whatsappPhoneNumber?: true
    referrerId?: true
    isVerified?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResellerMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    tier?: true
    status?: true
    balance?: true
    monthlyTurnover?: true
    totalTurnoverAllTime?: true
    discordUserId?: true
    telegramUserId?: true
    whatsappPhoneNumber?: true
    referrerId?: true
    isVerified?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResellerCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    tier?: true
    status?: true
    balance?: true
    monthlyTurnover?: true
    totalTurnoverAllTime?: true
    discordUserId?: true
    telegramUserId?: true
    whatsappPhoneNumber?: true
    referrerId?: true
    isVerified?: true
    verifiedAt?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResellerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reseller to aggregate.
     */
    where?: ResellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resellers to fetch.
     */
    orderBy?: ResellerOrderByWithRelationInput | ResellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resellers
    **/
    _count?: true | ResellerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResellerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResellerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResellerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResellerMaxAggregateInputType
  }

  export type GetResellerAggregateType<T extends ResellerAggregateArgs> = {
        [P in keyof T & keyof AggregateReseller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReseller[P]>
      : GetScalarType<T[P], AggregateReseller[P]>
  }




  export type ResellerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellerWhereInput
    orderBy?: ResellerOrderByWithAggregationInput | ResellerOrderByWithAggregationInput[]
    by: ResellerScalarFieldEnum[] | ResellerScalarFieldEnum
    having?: ResellerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResellerCountAggregateInputType | true
    _avg?: ResellerAvgAggregateInputType
    _sum?: ResellerSumAggregateInputType
    _min?: ResellerMinAggregateInputType
    _max?: ResellerMaxAggregateInputType
  }

  export type ResellerGroupByOutputType = {
    id: string
    email: string | null
    username: string
    name: string
    tier: $Enums.ResellerTier
    status: $Enums.ResellerStatus
    balance: bigint
    monthlyTurnover: bigint
    totalTurnoverAllTime: bigint
    discordUserId: string | null
    telegramUserId: string | null
    whatsappPhoneNumber: string | null
    referrerId: string | null
    isVerified: boolean
    verifiedAt: Date | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ResellerCountAggregateOutputType | null
    _avg: ResellerAvgAggregateOutputType | null
    _sum: ResellerSumAggregateOutputType | null
    _min: ResellerMinAggregateOutputType | null
    _max: ResellerMaxAggregateOutputType | null
  }

  type GetResellerGroupByPayload<T extends ResellerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResellerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResellerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResellerGroupByOutputType[P]>
            : GetScalarType<T[P], ResellerGroupByOutputType[P]>
        }
      >
    >


  export type ResellerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    tier?: boolean
    status?: boolean
    balance?: boolean
    monthlyTurnover?: boolean
    totalTurnoverAllTime?: boolean
    discordUserId?: boolean
    telegramUserId?: boolean
    whatsappPhoneNumber?: boolean
    referrerId?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referrer?: boolean | Reseller$referrerArgs<ExtArgs>
    referrals?: boolean | Reseller$referralsArgs<ExtArgs>
    orders?: boolean | Reseller$ordersArgs<ExtArgs>
    deposits?: boolean | Reseller$depositsArgs<ExtArgs>
    auditLogs?: boolean | Reseller$auditLogsArgs<ExtArgs>
    _count?: boolean | ResellerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reseller"]>

  export type ResellerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    tier?: boolean
    status?: boolean
    balance?: boolean
    monthlyTurnover?: boolean
    totalTurnoverAllTime?: boolean
    discordUserId?: boolean
    telegramUserId?: boolean
    whatsappPhoneNumber?: boolean
    referrerId?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referrer?: boolean | Reseller$referrerArgs<ExtArgs>
  }, ExtArgs["result"]["reseller"]>

  export type ResellerSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    tier?: boolean
    status?: boolean
    balance?: boolean
    monthlyTurnover?: boolean
    totalTurnoverAllTime?: boolean
    discordUserId?: boolean
    telegramUserId?: boolean
    whatsappPhoneNumber?: boolean
    referrerId?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResellerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | Reseller$referrerArgs<ExtArgs>
    referrals?: boolean | Reseller$referralsArgs<ExtArgs>
    orders?: boolean | Reseller$ordersArgs<ExtArgs>
    deposits?: boolean | Reseller$depositsArgs<ExtArgs>
    auditLogs?: boolean | Reseller$auditLogsArgs<ExtArgs>
    _count?: boolean | ResellerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResellerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | Reseller$referrerArgs<ExtArgs>
  }

  export type $ResellerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reseller"
    objects: {
      referrer: Prisma.$ResellerPayload<ExtArgs> | null
      referrals: Prisma.$ResellerPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      deposits: Prisma.$DepositPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      username: string
      name: string
      tier: $Enums.ResellerTier
      status: $Enums.ResellerStatus
      balance: bigint
      monthlyTurnover: bigint
      totalTurnoverAllTime: bigint
      discordUserId: string | null
      telegramUserId: string | null
      whatsappPhoneNumber: string | null
      referrerId: string | null
      isVerified: boolean
      verifiedAt: Date | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reseller"]>
    composites: {}
  }

  type ResellerGetPayload<S extends boolean | null | undefined | ResellerDefaultArgs> = $Result.GetResult<Prisma.$ResellerPayload, S>

  type ResellerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResellerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResellerCountAggregateInputType | true
    }

  export interface ResellerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reseller'], meta: { name: 'Reseller' } }
    /**
     * Find zero or one Reseller that matches the filter.
     * @param {ResellerFindUniqueArgs} args - Arguments to find a Reseller
     * @example
     * // Get one Reseller
     * const reseller = await prisma.reseller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResellerFindUniqueArgs>(args: SelectSubset<T, ResellerFindUniqueArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reseller that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResellerFindUniqueOrThrowArgs} args - Arguments to find a Reseller
     * @example
     * // Get one Reseller
     * const reseller = await prisma.reseller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResellerFindUniqueOrThrowArgs>(args: SelectSubset<T, ResellerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reseller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerFindFirstArgs} args - Arguments to find a Reseller
     * @example
     * // Get one Reseller
     * const reseller = await prisma.reseller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResellerFindFirstArgs>(args?: SelectSubset<T, ResellerFindFirstArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reseller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerFindFirstOrThrowArgs} args - Arguments to find a Reseller
     * @example
     * // Get one Reseller
     * const reseller = await prisma.reseller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResellerFindFirstOrThrowArgs>(args?: SelectSubset<T, ResellerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Resellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resellers
     * const resellers = await prisma.reseller.findMany()
     * 
     * // Get first 10 Resellers
     * const resellers = await prisma.reseller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resellerWithIdOnly = await prisma.reseller.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResellerFindManyArgs>(args?: SelectSubset<T, ResellerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reseller.
     * @param {ResellerCreateArgs} args - Arguments to create a Reseller.
     * @example
     * // Create one Reseller
     * const Reseller = await prisma.reseller.create({
     *   data: {
     *     // ... data to create a Reseller
     *   }
     * })
     * 
     */
    create<T extends ResellerCreateArgs>(args: SelectSubset<T, ResellerCreateArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Resellers.
     * @param {ResellerCreateManyArgs} args - Arguments to create many Resellers.
     * @example
     * // Create many Resellers
     * const reseller = await prisma.reseller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResellerCreateManyArgs>(args?: SelectSubset<T, ResellerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resellers and returns the data saved in the database.
     * @param {ResellerCreateManyAndReturnArgs} args - Arguments to create many Resellers.
     * @example
     * // Create many Resellers
     * const reseller = await prisma.reseller.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resellers and only return the `id`
     * const resellerWithIdOnly = await prisma.reseller.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResellerCreateManyAndReturnArgs>(args?: SelectSubset<T, ResellerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reseller.
     * @param {ResellerDeleteArgs} args - Arguments to delete one Reseller.
     * @example
     * // Delete one Reseller
     * const Reseller = await prisma.reseller.delete({
     *   where: {
     *     // ... filter to delete one Reseller
     *   }
     * })
     * 
     */
    delete<T extends ResellerDeleteArgs>(args: SelectSubset<T, ResellerDeleteArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reseller.
     * @param {ResellerUpdateArgs} args - Arguments to update one Reseller.
     * @example
     * // Update one Reseller
     * const reseller = await prisma.reseller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResellerUpdateArgs>(args: SelectSubset<T, ResellerUpdateArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Resellers.
     * @param {ResellerDeleteManyArgs} args - Arguments to filter Resellers to delete.
     * @example
     * // Delete a few Resellers
     * const { count } = await prisma.reseller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResellerDeleteManyArgs>(args?: SelectSubset<T, ResellerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resellers
     * const reseller = await prisma.reseller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResellerUpdateManyArgs>(args: SelectSubset<T, ResellerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reseller.
     * @param {ResellerUpsertArgs} args - Arguments to update or create a Reseller.
     * @example
     * // Update or create a Reseller
     * const reseller = await prisma.reseller.upsert({
     *   create: {
     *     // ... data to create a Reseller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reseller we want to update
     *   }
     * })
     */
    upsert<T extends ResellerUpsertArgs>(args: SelectSubset<T, ResellerUpsertArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Resellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerCountArgs} args - Arguments to filter Resellers to count.
     * @example
     * // Count the number of Resellers
     * const count = await prisma.reseller.count({
     *   where: {
     *     // ... the filter for the Resellers we want to count
     *   }
     * })
    **/
    count<T extends ResellerCountArgs>(
      args?: Subset<T, ResellerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResellerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reseller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResellerAggregateArgs>(args: Subset<T, ResellerAggregateArgs>): Prisma.PrismaPromise<GetResellerAggregateType<T>>

    /**
     * Group by Reseller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResellerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResellerGroupByArgs['orderBy'] }
        : { orderBy?: ResellerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reseller model
   */
  readonly fields: ResellerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reseller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResellerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends Reseller$referrerArgs<ExtArgs> = {}>(args?: Subset<T, Reseller$referrerArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    referrals<T extends Reseller$referralsArgs<ExtArgs> = {}>(args?: Subset<T, Reseller$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Reseller$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Reseller$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    deposits<T extends Reseller$depositsArgs<ExtArgs> = {}>(args?: Subset<T, Reseller$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends Reseller$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Reseller$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reseller model
   */ 
  interface ResellerFieldRefs {
    readonly id: FieldRef<"Reseller", 'String'>
    readonly email: FieldRef<"Reseller", 'String'>
    readonly username: FieldRef<"Reseller", 'String'>
    readonly name: FieldRef<"Reseller", 'String'>
    readonly tier: FieldRef<"Reseller", 'ResellerTier'>
    readonly status: FieldRef<"Reseller", 'ResellerStatus'>
    readonly balance: FieldRef<"Reseller", 'BigInt'>
    readonly monthlyTurnover: FieldRef<"Reseller", 'BigInt'>
    readonly totalTurnoverAllTime: FieldRef<"Reseller", 'BigInt'>
    readonly discordUserId: FieldRef<"Reseller", 'String'>
    readonly telegramUserId: FieldRef<"Reseller", 'String'>
    readonly whatsappPhoneNumber: FieldRef<"Reseller", 'String'>
    readonly referrerId: FieldRef<"Reseller", 'String'>
    readonly isVerified: FieldRef<"Reseller", 'Boolean'>
    readonly verifiedAt: FieldRef<"Reseller", 'DateTime'>
    readonly metadata: FieldRef<"Reseller", 'Json'>
    readonly createdAt: FieldRef<"Reseller", 'DateTime'>
    readonly updatedAt: FieldRef<"Reseller", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reseller findUnique
   */
  export type ResellerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * Filter, which Reseller to fetch.
     */
    where: ResellerWhereUniqueInput
  }

  /**
   * Reseller findUniqueOrThrow
   */
  export type ResellerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * Filter, which Reseller to fetch.
     */
    where: ResellerWhereUniqueInput
  }

  /**
   * Reseller findFirst
   */
  export type ResellerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * Filter, which Reseller to fetch.
     */
    where?: ResellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resellers to fetch.
     */
    orderBy?: ResellerOrderByWithRelationInput | ResellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resellers.
     */
    cursor?: ResellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resellers.
     */
    distinct?: ResellerScalarFieldEnum | ResellerScalarFieldEnum[]
  }

  /**
   * Reseller findFirstOrThrow
   */
  export type ResellerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * Filter, which Reseller to fetch.
     */
    where?: ResellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resellers to fetch.
     */
    orderBy?: ResellerOrderByWithRelationInput | ResellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resellers.
     */
    cursor?: ResellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resellers.
     */
    distinct?: ResellerScalarFieldEnum | ResellerScalarFieldEnum[]
  }

  /**
   * Reseller findMany
   */
  export type ResellerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * Filter, which Resellers to fetch.
     */
    where?: ResellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resellers to fetch.
     */
    orderBy?: ResellerOrderByWithRelationInput | ResellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resellers.
     */
    cursor?: ResellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resellers.
     */
    skip?: number
    distinct?: ResellerScalarFieldEnum | ResellerScalarFieldEnum[]
  }

  /**
   * Reseller create
   */
  export type ResellerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * The data needed to create a Reseller.
     */
    data: XOR<ResellerCreateInput, ResellerUncheckedCreateInput>
  }

  /**
   * Reseller createMany
   */
  export type ResellerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resellers.
     */
    data: ResellerCreateManyInput | ResellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reseller createManyAndReturn
   */
  export type ResellerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Resellers.
     */
    data: ResellerCreateManyInput | ResellerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reseller update
   */
  export type ResellerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * The data needed to update a Reseller.
     */
    data: XOR<ResellerUpdateInput, ResellerUncheckedUpdateInput>
    /**
     * Choose, which Reseller to update.
     */
    where: ResellerWhereUniqueInput
  }

  /**
   * Reseller updateMany
   */
  export type ResellerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resellers.
     */
    data: XOR<ResellerUpdateManyMutationInput, ResellerUncheckedUpdateManyInput>
    /**
     * Filter which Resellers to update
     */
    where?: ResellerWhereInput
  }

  /**
   * Reseller upsert
   */
  export type ResellerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * The filter to search for the Reseller to update in case it exists.
     */
    where: ResellerWhereUniqueInput
    /**
     * In case the Reseller found by the `where` argument doesn't exist, create a new Reseller with this data.
     */
    create: XOR<ResellerCreateInput, ResellerUncheckedCreateInput>
    /**
     * In case the Reseller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResellerUpdateInput, ResellerUncheckedUpdateInput>
  }

  /**
   * Reseller delete
   */
  export type ResellerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    /**
     * Filter which Reseller to delete.
     */
    where: ResellerWhereUniqueInput
  }

  /**
   * Reseller deleteMany
   */
  export type ResellerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resellers to delete
     */
    where?: ResellerWhereInput
  }

  /**
   * Reseller.referrer
   */
  export type Reseller$referrerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    where?: ResellerWhereInput
  }

  /**
   * Reseller.referrals
   */
  export type Reseller$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    where?: ResellerWhereInput
    orderBy?: ResellerOrderByWithRelationInput | ResellerOrderByWithRelationInput[]
    cursor?: ResellerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResellerScalarFieldEnum | ResellerScalarFieldEnum[]
  }

  /**
   * Reseller.orders
   */
  export type Reseller$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Reseller.deposits
   */
  export type Reseller$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Reseller.auditLogs
   */
  export type Reseller$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Reseller without action
   */
  export type ResellerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    costPrice: number | null
    baseMarkup: number | null
    maxStock: number | null
    currentStock: number | null
  }

  export type ProductSumAggregateOutputType = {
    costPrice: bigint | null
    baseMarkup: bigint | null
    maxStock: number | null
    currentStock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    code: string | null
    gameName: string | null
    displayName: string | null
    description: string | null
    costPrice: bigint | null
    baseMarkup: bigint | null
    active: boolean | null
    maxStock: number | null
    currentStock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    code: string | null
    gameName: string | null
    displayName: string | null
    description: string | null
    costPrice: bigint | null
    baseMarkup: bigint | null
    active: boolean | null
    maxStock: number | null
    currentStock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    code: number
    gameName: number
    displayName: number
    description: number
    costPrice: number
    baseMarkup: number
    active: number
    maxStock: number
    currentStock: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    costPrice?: true
    baseMarkup?: true
    maxStock?: true
    currentStock?: true
  }

  export type ProductSumAggregateInputType = {
    costPrice?: true
    baseMarkup?: true
    maxStock?: true
    currentStock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    code?: true
    gameName?: true
    displayName?: true
    description?: true
    costPrice?: true
    baseMarkup?: true
    active?: true
    maxStock?: true
    currentStock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    code?: true
    gameName?: true
    displayName?: true
    description?: true
    costPrice?: true
    baseMarkup?: true
    active?: true
    maxStock?: true
    currentStock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    code?: true
    gameName?: true
    displayName?: true
    description?: true
    costPrice?: true
    baseMarkup?: true
    active?: true
    maxStock?: true
    currentStock?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    code: string
    gameName: string
    displayName: string
    description: string | null
    costPrice: bigint
    baseMarkup: bigint
    active: boolean
    maxStock: number | null
    currentStock: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    gameName?: boolean
    displayName?: boolean
    description?: boolean
    costPrice?: boolean
    baseMarkup?: boolean
    active?: boolean
    maxStock?: boolean
    currentStock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Product$ordersArgs<ExtArgs>
    tierPrices?: boolean | Product$tierPricesArgs<ExtArgs>
    pricingHistory?: boolean | Product$pricingHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    gameName?: boolean
    displayName?: boolean
    description?: boolean
    costPrice?: boolean
    baseMarkup?: boolean
    active?: boolean
    maxStock?: boolean
    currentStock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    code?: boolean
    gameName?: boolean
    displayName?: boolean
    description?: boolean
    costPrice?: boolean
    baseMarkup?: boolean
    active?: boolean
    maxStock?: boolean
    currentStock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Product$ordersArgs<ExtArgs>
    tierPrices?: boolean | Product$tierPricesArgs<ExtArgs>
    pricingHistory?: boolean | Product$pricingHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      tierPrices: Prisma.$TierPricePayload<ExtArgs>[]
      pricingHistory: Prisma.$ProductPricingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      gameName: string
      displayName: string
      description: string | null
      costPrice: bigint
      baseMarkup: bigint
      active: boolean
      maxStock: number | null
      currentStock: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Product$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    tierPrices<T extends Product$tierPricesArgs<ExtArgs> = {}>(args?: Subset<T, Product$tierPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "findMany"> | Null>
    pricingHistory<T extends Product$pricingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$pricingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly code: FieldRef<"Product", 'String'>
    readonly gameName: FieldRef<"Product", 'String'>
    readonly displayName: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly costPrice: FieldRef<"Product", 'BigInt'>
    readonly baseMarkup: FieldRef<"Product", 'BigInt'>
    readonly active: FieldRef<"Product", 'Boolean'>
    readonly maxStock: FieldRef<"Product", 'Int'>
    readonly currentStock: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.orders
   */
  export type Product$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Product.tierPrices
   */
  export type Product$tierPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    where?: TierPriceWhereInput
    orderBy?: TierPriceOrderByWithRelationInput | TierPriceOrderByWithRelationInput[]
    cursor?: TierPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TierPriceScalarFieldEnum | TierPriceScalarFieldEnum[]
  }

  /**
   * Product.pricingHistory
   */
  export type Product$pricingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    where?: ProductPricingWhereInput
    orderBy?: ProductPricingOrderByWithRelationInput | ProductPricingOrderByWithRelationInput[]
    cursor?: ProductPricingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPricingScalarFieldEnum | ProductPricingScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model TierPrice
   */

  export type AggregateTierPrice = {
    _count: TierPriceCountAggregateOutputType | null
    _avg: TierPriceAvgAggregateOutputType | null
    _sum: TierPriceSumAggregateOutputType | null
    _min: TierPriceMinAggregateOutputType | null
    _max: TierPriceMaxAggregateOutputType | null
  }

  export type TierPriceAvgAggregateOutputType = {
    markup: number | null
  }

  export type TierPriceSumAggregateOutputType = {
    markup: bigint | null
  }

  export type TierPriceMinAggregateOutputType = {
    id: string | null
    productId: string | null
    tier: $Enums.ResellerTier | null
    markup: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TierPriceMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    tier: $Enums.ResellerTier | null
    markup: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TierPriceCountAggregateOutputType = {
    id: number
    productId: number
    tier: number
    markup: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TierPriceAvgAggregateInputType = {
    markup?: true
  }

  export type TierPriceSumAggregateInputType = {
    markup?: true
  }

  export type TierPriceMinAggregateInputType = {
    id?: true
    productId?: true
    tier?: true
    markup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TierPriceMaxAggregateInputType = {
    id?: true
    productId?: true
    tier?: true
    markup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TierPriceCountAggregateInputType = {
    id?: true
    productId?: true
    tier?: true
    markup?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TierPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TierPrice to aggregate.
     */
    where?: TierPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TierPrices to fetch.
     */
    orderBy?: TierPriceOrderByWithRelationInput | TierPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TierPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TierPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TierPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TierPrices
    **/
    _count?: true | TierPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TierPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TierPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TierPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TierPriceMaxAggregateInputType
  }

  export type GetTierPriceAggregateType<T extends TierPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateTierPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTierPrice[P]>
      : GetScalarType<T[P], AggregateTierPrice[P]>
  }




  export type TierPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TierPriceWhereInput
    orderBy?: TierPriceOrderByWithAggregationInput | TierPriceOrderByWithAggregationInput[]
    by: TierPriceScalarFieldEnum[] | TierPriceScalarFieldEnum
    having?: TierPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TierPriceCountAggregateInputType | true
    _avg?: TierPriceAvgAggregateInputType
    _sum?: TierPriceSumAggregateInputType
    _min?: TierPriceMinAggregateInputType
    _max?: TierPriceMaxAggregateInputType
  }

  export type TierPriceGroupByOutputType = {
    id: string
    productId: string
    tier: $Enums.ResellerTier
    markup: bigint
    createdAt: Date
    updatedAt: Date
    _count: TierPriceCountAggregateOutputType | null
    _avg: TierPriceAvgAggregateOutputType | null
    _sum: TierPriceSumAggregateOutputType | null
    _min: TierPriceMinAggregateOutputType | null
    _max: TierPriceMaxAggregateOutputType | null
  }

  type GetTierPriceGroupByPayload<T extends TierPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TierPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TierPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TierPriceGroupByOutputType[P]>
            : GetScalarType<T[P], TierPriceGroupByOutputType[P]>
        }
      >
    >


  export type TierPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    tier?: boolean
    markup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tierPrice"]>

  export type TierPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    tier?: boolean
    markup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tierPrice"]>

  export type TierPriceSelectScalar = {
    id?: boolean
    productId?: boolean
    tier?: boolean
    markup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TierPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TierPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $TierPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TierPrice"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      tier: $Enums.ResellerTier
      markup: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tierPrice"]>
    composites: {}
  }

  type TierPriceGetPayload<S extends boolean | null | undefined | TierPriceDefaultArgs> = $Result.GetResult<Prisma.$TierPricePayload, S>

  type TierPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TierPriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TierPriceCountAggregateInputType | true
    }

  export interface TierPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TierPrice'], meta: { name: 'TierPrice' } }
    /**
     * Find zero or one TierPrice that matches the filter.
     * @param {TierPriceFindUniqueArgs} args - Arguments to find a TierPrice
     * @example
     * // Get one TierPrice
     * const tierPrice = await prisma.tierPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TierPriceFindUniqueArgs>(args: SelectSubset<T, TierPriceFindUniqueArgs<ExtArgs>>): Prisma__TierPriceClient<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TierPrice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TierPriceFindUniqueOrThrowArgs} args - Arguments to find a TierPrice
     * @example
     * // Get one TierPrice
     * const tierPrice = await prisma.tierPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TierPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, TierPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TierPriceClient<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TierPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TierPriceFindFirstArgs} args - Arguments to find a TierPrice
     * @example
     * // Get one TierPrice
     * const tierPrice = await prisma.tierPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TierPriceFindFirstArgs>(args?: SelectSubset<T, TierPriceFindFirstArgs<ExtArgs>>): Prisma__TierPriceClient<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TierPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TierPriceFindFirstOrThrowArgs} args - Arguments to find a TierPrice
     * @example
     * // Get one TierPrice
     * const tierPrice = await prisma.tierPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TierPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, TierPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TierPriceClient<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TierPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TierPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TierPrices
     * const tierPrices = await prisma.tierPrice.findMany()
     * 
     * // Get first 10 TierPrices
     * const tierPrices = await prisma.tierPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tierPriceWithIdOnly = await prisma.tierPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TierPriceFindManyArgs>(args?: SelectSubset<T, TierPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TierPrice.
     * @param {TierPriceCreateArgs} args - Arguments to create a TierPrice.
     * @example
     * // Create one TierPrice
     * const TierPrice = await prisma.tierPrice.create({
     *   data: {
     *     // ... data to create a TierPrice
     *   }
     * })
     * 
     */
    create<T extends TierPriceCreateArgs>(args: SelectSubset<T, TierPriceCreateArgs<ExtArgs>>): Prisma__TierPriceClient<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TierPrices.
     * @param {TierPriceCreateManyArgs} args - Arguments to create many TierPrices.
     * @example
     * // Create many TierPrices
     * const tierPrice = await prisma.tierPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TierPriceCreateManyArgs>(args?: SelectSubset<T, TierPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TierPrices and returns the data saved in the database.
     * @param {TierPriceCreateManyAndReturnArgs} args - Arguments to create many TierPrices.
     * @example
     * // Create many TierPrices
     * const tierPrice = await prisma.tierPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TierPrices and only return the `id`
     * const tierPriceWithIdOnly = await prisma.tierPrice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TierPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, TierPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TierPrice.
     * @param {TierPriceDeleteArgs} args - Arguments to delete one TierPrice.
     * @example
     * // Delete one TierPrice
     * const TierPrice = await prisma.tierPrice.delete({
     *   where: {
     *     // ... filter to delete one TierPrice
     *   }
     * })
     * 
     */
    delete<T extends TierPriceDeleteArgs>(args: SelectSubset<T, TierPriceDeleteArgs<ExtArgs>>): Prisma__TierPriceClient<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TierPrice.
     * @param {TierPriceUpdateArgs} args - Arguments to update one TierPrice.
     * @example
     * // Update one TierPrice
     * const tierPrice = await prisma.tierPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TierPriceUpdateArgs>(args: SelectSubset<T, TierPriceUpdateArgs<ExtArgs>>): Prisma__TierPriceClient<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TierPrices.
     * @param {TierPriceDeleteManyArgs} args - Arguments to filter TierPrices to delete.
     * @example
     * // Delete a few TierPrices
     * const { count } = await prisma.tierPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TierPriceDeleteManyArgs>(args?: SelectSubset<T, TierPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TierPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TierPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TierPrices
     * const tierPrice = await prisma.tierPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TierPriceUpdateManyArgs>(args: SelectSubset<T, TierPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TierPrice.
     * @param {TierPriceUpsertArgs} args - Arguments to update or create a TierPrice.
     * @example
     * // Update or create a TierPrice
     * const tierPrice = await prisma.tierPrice.upsert({
     *   create: {
     *     // ... data to create a TierPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TierPrice we want to update
     *   }
     * })
     */
    upsert<T extends TierPriceUpsertArgs>(args: SelectSubset<T, TierPriceUpsertArgs<ExtArgs>>): Prisma__TierPriceClient<$Result.GetResult<Prisma.$TierPricePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TierPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TierPriceCountArgs} args - Arguments to filter TierPrices to count.
     * @example
     * // Count the number of TierPrices
     * const count = await prisma.tierPrice.count({
     *   where: {
     *     // ... the filter for the TierPrices we want to count
     *   }
     * })
    **/
    count<T extends TierPriceCountArgs>(
      args?: Subset<T, TierPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TierPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TierPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TierPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TierPriceAggregateArgs>(args: Subset<T, TierPriceAggregateArgs>): Prisma.PrismaPromise<GetTierPriceAggregateType<T>>

    /**
     * Group by TierPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TierPriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TierPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TierPriceGroupByArgs['orderBy'] }
        : { orderBy?: TierPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TierPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTierPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TierPrice model
   */
  readonly fields: TierPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TierPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TierPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TierPrice model
   */ 
  interface TierPriceFieldRefs {
    readonly id: FieldRef<"TierPrice", 'String'>
    readonly productId: FieldRef<"TierPrice", 'String'>
    readonly tier: FieldRef<"TierPrice", 'ResellerTier'>
    readonly markup: FieldRef<"TierPrice", 'BigInt'>
    readonly createdAt: FieldRef<"TierPrice", 'DateTime'>
    readonly updatedAt: FieldRef<"TierPrice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TierPrice findUnique
   */
  export type TierPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * Filter, which TierPrice to fetch.
     */
    where: TierPriceWhereUniqueInput
  }

  /**
   * TierPrice findUniqueOrThrow
   */
  export type TierPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * Filter, which TierPrice to fetch.
     */
    where: TierPriceWhereUniqueInput
  }

  /**
   * TierPrice findFirst
   */
  export type TierPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * Filter, which TierPrice to fetch.
     */
    where?: TierPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TierPrices to fetch.
     */
    orderBy?: TierPriceOrderByWithRelationInput | TierPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TierPrices.
     */
    cursor?: TierPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TierPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TierPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TierPrices.
     */
    distinct?: TierPriceScalarFieldEnum | TierPriceScalarFieldEnum[]
  }

  /**
   * TierPrice findFirstOrThrow
   */
  export type TierPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * Filter, which TierPrice to fetch.
     */
    where?: TierPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TierPrices to fetch.
     */
    orderBy?: TierPriceOrderByWithRelationInput | TierPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TierPrices.
     */
    cursor?: TierPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TierPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TierPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TierPrices.
     */
    distinct?: TierPriceScalarFieldEnum | TierPriceScalarFieldEnum[]
  }

  /**
   * TierPrice findMany
   */
  export type TierPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * Filter, which TierPrices to fetch.
     */
    where?: TierPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TierPrices to fetch.
     */
    orderBy?: TierPriceOrderByWithRelationInput | TierPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TierPrices.
     */
    cursor?: TierPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TierPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TierPrices.
     */
    skip?: number
    distinct?: TierPriceScalarFieldEnum | TierPriceScalarFieldEnum[]
  }

  /**
   * TierPrice create
   */
  export type TierPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a TierPrice.
     */
    data: XOR<TierPriceCreateInput, TierPriceUncheckedCreateInput>
  }

  /**
   * TierPrice createMany
   */
  export type TierPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TierPrices.
     */
    data: TierPriceCreateManyInput | TierPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TierPrice createManyAndReturn
   */
  export type TierPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TierPrices.
     */
    data: TierPriceCreateManyInput | TierPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TierPrice update
   */
  export type TierPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a TierPrice.
     */
    data: XOR<TierPriceUpdateInput, TierPriceUncheckedUpdateInput>
    /**
     * Choose, which TierPrice to update.
     */
    where: TierPriceWhereUniqueInput
  }

  /**
   * TierPrice updateMany
   */
  export type TierPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TierPrices.
     */
    data: XOR<TierPriceUpdateManyMutationInput, TierPriceUncheckedUpdateManyInput>
    /**
     * Filter which TierPrices to update
     */
    where?: TierPriceWhereInput
  }

  /**
   * TierPrice upsert
   */
  export type TierPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the TierPrice to update in case it exists.
     */
    where: TierPriceWhereUniqueInput
    /**
     * In case the TierPrice found by the `where` argument doesn't exist, create a new TierPrice with this data.
     */
    create: XOR<TierPriceCreateInput, TierPriceUncheckedCreateInput>
    /**
     * In case the TierPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TierPriceUpdateInput, TierPriceUncheckedUpdateInput>
  }

  /**
   * TierPrice delete
   */
  export type TierPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
    /**
     * Filter which TierPrice to delete.
     */
    where: TierPriceWhereUniqueInput
  }

  /**
   * TierPrice deleteMany
   */
  export type TierPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TierPrices to delete
     */
    where?: TierPriceWhereInput
  }

  /**
   * TierPrice without action
   */
  export type TierPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TierPrice
     */
    select?: TierPriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TierPriceInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    amount: number | null
  }

  export type DepositSumAggregateOutputType = {
    amount: bigint | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    resellerId: string | null
    amount: bigint | null
    paymentChannel: $Enums.PaymentChannel | null
    status: $Enums.DepositStatus | null
    externalPaymentId: string | null
    paymentUrl: string | null
    qrCodeUrl: string | null
    virtualAccountNumber: string | null
    bankName: string | null
    createdAt: Date | null
    expiresAt: Date | null
    paidAt: Date | null
    updatedAt: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    resellerId: string | null
    amount: bigint | null
    paymentChannel: $Enums.PaymentChannel | null
    status: $Enums.DepositStatus | null
    externalPaymentId: string | null
    paymentUrl: string | null
    qrCodeUrl: string | null
    virtualAccountNumber: string | null
    bankName: string | null
    createdAt: Date | null
    expiresAt: Date | null
    paidAt: Date | null
    updatedAt: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    resellerId: number
    amount: number
    paymentChannel: number
    status: number
    externalPaymentId: number
    paymentUrl: number
    qrCodeUrl: number
    virtualAccountNumber: number
    bankName: number
    createdAt: number
    expiresAt: number
    paidAt: number
    updatedAt: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    amount?: true
  }

  export type DepositSumAggregateInputType = {
    amount?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    resellerId?: true
    amount?: true
    paymentChannel?: true
    status?: true
    externalPaymentId?: true
    paymentUrl?: true
    qrCodeUrl?: true
    virtualAccountNumber?: true
    bankName?: true
    createdAt?: true
    expiresAt?: true
    paidAt?: true
    updatedAt?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    resellerId?: true
    amount?: true
    paymentChannel?: true
    status?: true
    externalPaymentId?: true
    paymentUrl?: true
    qrCodeUrl?: true
    virtualAccountNumber?: true
    bankName?: true
    createdAt?: true
    expiresAt?: true
    paidAt?: true
    updatedAt?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    resellerId?: true
    amount?: true
    paymentChannel?: true
    status?: true
    externalPaymentId?: true
    paymentUrl?: true
    qrCodeUrl?: true
    virtualAccountNumber?: true
    bankName?: true
    createdAt?: true
    expiresAt?: true
    paidAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: string
    resellerId: string
    amount: bigint
    paymentChannel: $Enums.PaymentChannel
    status: $Enums.DepositStatus
    externalPaymentId: string | null
    paymentUrl: string | null
    qrCodeUrl: string | null
    virtualAccountNumber: string | null
    bankName: string | null
    createdAt: Date
    expiresAt: Date
    paidAt: Date | null
    updatedAt: Date
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellerId?: boolean
    amount?: boolean
    paymentChannel?: boolean
    status?: boolean
    externalPaymentId?: boolean
    paymentUrl?: boolean
    qrCodeUrl?: boolean
    virtualAccountNumber?: boolean
    bankName?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    paidAt?: boolean
    updatedAt?: boolean
    reseller?: boolean | ResellerDefaultArgs<ExtArgs>
    transactions?: boolean | Deposit$transactionsArgs<ExtArgs>
    _count?: boolean | DepositCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellerId?: boolean
    amount?: boolean
    paymentChannel?: boolean
    status?: boolean
    externalPaymentId?: boolean
    paymentUrl?: boolean
    qrCodeUrl?: boolean
    virtualAccountNumber?: boolean
    bankName?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    paidAt?: boolean
    updatedAt?: boolean
    reseller?: boolean | ResellerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    resellerId?: boolean
    amount?: boolean
    paymentChannel?: boolean
    status?: boolean
    externalPaymentId?: boolean
    paymentUrl?: boolean
    qrCodeUrl?: boolean
    virtualAccountNumber?: boolean
    bankName?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    paidAt?: boolean
    updatedAt?: boolean
  }

  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reseller?: boolean | ResellerDefaultArgs<ExtArgs>
    transactions?: boolean | Deposit$transactionsArgs<ExtArgs>
    _count?: boolean | DepositCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reseller?: boolean | ResellerDefaultArgs<ExtArgs>
  }

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      reseller: Prisma.$ResellerPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resellerId: string
      amount: bigint
      paymentChannel: $Enums.PaymentChannel
      status: $Enums.DepositStatus
      externalPaymentId: string | null
      paymentUrl: string | null
      qrCodeUrl: string | null
      virtualAccountNumber: string | null
      bankName: string | null
      createdAt: Date
      expiresAt: Date
      paidAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reseller<T extends ResellerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResellerDefaultArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transactions<T extends Deposit$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Deposit$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deposit model
   */ 
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'String'>
    readonly resellerId: FieldRef<"Deposit", 'String'>
    readonly amount: FieldRef<"Deposit", 'BigInt'>
    readonly paymentChannel: FieldRef<"Deposit", 'PaymentChannel'>
    readonly status: FieldRef<"Deposit", 'DepositStatus'>
    readonly externalPaymentId: FieldRef<"Deposit", 'String'>
    readonly paymentUrl: FieldRef<"Deposit", 'String'>
    readonly qrCodeUrl: FieldRef<"Deposit", 'String'>
    readonly virtualAccountNumber: FieldRef<"Deposit", 'String'>
    readonly bankName: FieldRef<"Deposit", 'String'>
    readonly createdAt: FieldRef<"Deposit", 'DateTime'>
    readonly expiresAt: FieldRef<"Deposit", 'DateTime'>
    readonly paidAt: FieldRef<"Deposit", 'DateTime'>
    readonly updatedAt: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
  }

  /**
   * Deposit.transactions
   */
  export type Deposit$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    quantity: number | null
    costPrice: number | null
    resellerPrice: number | null
    ppnAmount: number | null
    marginAmount: number | null
    profit: number | null
  }

  export type OrderSumAggregateOutputType = {
    quantity: number | null
    costPrice: bigint | null
    resellerPrice: bigint | null
    ppnAmount: bigint | null
    marginAmount: bigint | null
    profit: bigint | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    resellerId: string | null
    productId: string | null
    targetGameId: string | null
    quantity: number | null
    costPrice: bigint | null
    resellerPrice: bigint | null
    ppnAmount: bigint | null
    marginAmount: bigint | null
    profit: bigint | null
    status: $Enums.OrderStatus | null
    failureReason: string | null
    externalRef: string | null
    supplierOrderData: string | null
    idempotencyKey: string | null
    createdAt: Date | null
    processedAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    resellerId: string | null
    productId: string | null
    targetGameId: string | null
    quantity: number | null
    costPrice: bigint | null
    resellerPrice: bigint | null
    ppnAmount: bigint | null
    marginAmount: bigint | null
    profit: bigint | null
    status: $Enums.OrderStatus | null
    failureReason: string | null
    externalRef: string | null
    supplierOrderData: string | null
    idempotencyKey: string | null
    createdAt: Date | null
    processedAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    resellerId: number
    productId: number
    targetGameId: number
    quantity: number
    costPrice: number
    resellerPrice: number
    ppnAmount: number
    marginAmount: number
    profit: number
    status: number
    failureReason: number
    externalRef: number
    supplierOrderData: number
    idempotencyKey: number
    metadata: number
    createdAt: number
    processedAt: number
    completedAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    quantity?: true
    costPrice?: true
    resellerPrice?: true
    ppnAmount?: true
    marginAmount?: true
    profit?: true
  }

  export type OrderSumAggregateInputType = {
    quantity?: true
    costPrice?: true
    resellerPrice?: true
    ppnAmount?: true
    marginAmount?: true
    profit?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    resellerId?: true
    productId?: true
    targetGameId?: true
    quantity?: true
    costPrice?: true
    resellerPrice?: true
    ppnAmount?: true
    marginAmount?: true
    profit?: true
    status?: true
    failureReason?: true
    externalRef?: true
    supplierOrderData?: true
    idempotencyKey?: true
    createdAt?: true
    processedAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    resellerId?: true
    productId?: true
    targetGameId?: true
    quantity?: true
    costPrice?: true
    resellerPrice?: true
    ppnAmount?: true
    marginAmount?: true
    profit?: true
    status?: true
    failureReason?: true
    externalRef?: true
    supplierOrderData?: true
    idempotencyKey?: true
    createdAt?: true
    processedAt?: true
    completedAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    resellerId?: true
    productId?: true
    targetGameId?: true
    quantity?: true
    costPrice?: true
    resellerPrice?: true
    ppnAmount?: true
    marginAmount?: true
    profit?: true
    status?: true
    failureReason?: true
    externalRef?: true
    supplierOrderData?: true
    idempotencyKey?: true
    metadata?: true
    createdAt?: true
    processedAt?: true
    completedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    resellerId: string
    productId: string
    targetGameId: string
    quantity: number
    costPrice: bigint
    resellerPrice: bigint
    ppnAmount: bigint
    marginAmount: bigint
    profit: bigint
    status: $Enums.OrderStatus
    failureReason: string | null
    externalRef: string | null
    supplierOrderData: string | null
    idempotencyKey: string
    metadata: JsonValue | null
    createdAt: Date
    processedAt: Date | null
    completedAt: Date | null
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellerId?: boolean
    productId?: boolean
    targetGameId?: boolean
    quantity?: boolean
    costPrice?: boolean
    resellerPrice?: boolean
    ppnAmount?: boolean
    marginAmount?: boolean
    profit?: boolean
    status?: boolean
    failureReason?: boolean
    externalRef?: boolean
    supplierOrderData?: boolean
    idempotencyKey?: boolean
    metadata?: boolean
    createdAt?: boolean
    processedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    reseller?: boolean | ResellerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    transactions?: boolean | Order$transactionsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellerId?: boolean
    productId?: boolean
    targetGameId?: boolean
    quantity?: boolean
    costPrice?: boolean
    resellerPrice?: boolean
    ppnAmount?: boolean
    marginAmount?: boolean
    profit?: boolean
    status?: boolean
    failureReason?: boolean
    externalRef?: boolean
    supplierOrderData?: boolean
    idempotencyKey?: boolean
    metadata?: boolean
    createdAt?: boolean
    processedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    reseller?: boolean | ResellerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    resellerId?: boolean
    productId?: boolean
    targetGameId?: boolean
    quantity?: boolean
    costPrice?: boolean
    resellerPrice?: boolean
    ppnAmount?: boolean
    marginAmount?: boolean
    profit?: boolean
    status?: boolean
    failureReason?: boolean
    externalRef?: boolean
    supplierOrderData?: boolean
    idempotencyKey?: boolean
    metadata?: boolean
    createdAt?: boolean
    processedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reseller?: boolean | ResellerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    transactions?: boolean | Order$transactionsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reseller?: boolean | ResellerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      reseller: Prisma.$ResellerPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resellerId: string
      productId: string
      targetGameId: string
      quantity: number
      costPrice: bigint
      resellerPrice: bigint
      ppnAmount: bigint
      marginAmount: bigint
      profit: bigint
      status: $Enums.OrderStatus
      failureReason: string | null
      externalRef: string | null
      supplierOrderData: string | null
      idempotencyKey: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      processedAt: Date | null
      completedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reseller<T extends ResellerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResellerDefaultArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transactions<T extends Order$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Order$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly resellerId: FieldRef<"Order", 'String'>
    readonly productId: FieldRef<"Order", 'String'>
    readonly targetGameId: FieldRef<"Order", 'String'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly costPrice: FieldRef<"Order", 'BigInt'>
    readonly resellerPrice: FieldRef<"Order", 'BigInt'>
    readonly ppnAmount: FieldRef<"Order", 'BigInt'>
    readonly marginAmount: FieldRef<"Order", 'BigInt'>
    readonly profit: FieldRef<"Order", 'BigInt'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly failureReason: FieldRef<"Order", 'String'>
    readonly externalRef: FieldRef<"Order", 'String'>
    readonly supplierOrderData: FieldRef<"Order", 'String'>
    readonly idempotencyKey: FieldRef<"Order", 'String'>
    readonly metadata: FieldRef<"Order", 'Json'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly processedAt: FieldRef<"Order", 'DateTime'>
    readonly completedAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.transactions
   */
  export type Order$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
    balance_before: number | null
    balance_after: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: bigint | null
    balance_before: bigint | null
    balance_after: bigint | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    type: string | null
    amount: bigint | null
    balance_before: bigint | null
    balance_after: bigint | null
    depositId: string | null
    orderId: string | null
    notes: string | null
    adjustedBy: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    amount: bigint | null
    balance_before: bigint | null
    balance_after: bigint | null
    depositId: string | null
    orderId: string | null
    notes: string | null
    adjustedBy: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    amount: number
    balance_before: number
    balance_after: number
    depositId: number
    orderId: number
    notes: number
    adjustedBy: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
    balance_before?: true
    balance_after?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
    balance_before?: true
    balance_after?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    balance_before?: true
    balance_after?: true
    depositId?: true
    orderId?: true
    notes?: true
    adjustedBy?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    balance_before?: true
    balance_after?: true
    depositId?: true
    orderId?: true
    notes?: true
    adjustedBy?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    balance_before?: true
    balance_after?: true
    depositId?: true
    orderId?: true
    notes?: true
    adjustedBy?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    type: string
    amount: bigint
    balance_before: bigint
    balance_after: bigint
    depositId: string | null
    orderId: string | null
    notes: string | null
    adjustedBy: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    balance_before?: boolean
    balance_after?: boolean
    depositId?: boolean
    orderId?: boolean
    notes?: boolean
    adjustedBy?: boolean
    createdAt?: boolean
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    balance_before?: boolean
    balance_after?: boolean
    depositId?: boolean
    orderId?: boolean
    notes?: boolean
    adjustedBy?: boolean
    createdAt?: boolean
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    amount?: boolean
    balance_before?: boolean
    balance_after?: boolean
    depositId?: boolean
    orderId?: boolean
    notes?: boolean
    adjustedBy?: boolean
    createdAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      deposit: Prisma.$DepositPayload<ExtArgs> | null
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      amount: bigint
      balance_before: bigint
      balance_after: bigint
      depositId: string | null
      orderId: string | null
      notes: string | null
      adjustedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deposit<T extends Transaction$depositArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$depositArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    order<T extends Transaction$orderArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'BigInt'>
    readonly balance_before: FieldRef<"Transaction", 'BigInt'>
    readonly balance_after: FieldRef<"Transaction", 'BigInt'>
    readonly depositId: FieldRef<"Transaction", 'String'>
    readonly orderId: FieldRef<"Transaction", 'String'>
    readonly notes: FieldRef<"Transaction", 'String'>
    readonly adjustedBy: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.deposit
   */
  export type Transaction$depositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
  }

  /**
   * Transaction.order
   */
  export type Transaction$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    username: string
    email: string | null
    passwordHash: string
    role: string
    isActive: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string | null
      passwordHash: string
      role: string
      isActive: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */ 
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly isActive: FieldRef<"AdminUser", 'Boolean'>
    readonly lastLoginAt: FieldRef<"AdminUser", 'DateTime'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    resellerId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    oldValue: string | null
    newValue: string | null
    performedBy: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    resellerId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    oldValue: string | null
    newValue: string | null
    performedBy: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    resellerId: number
    action: number
    entityType: number
    entityId: number
    oldValue: number
    newValue: number
    performedBy: number
    notes: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    resellerId?: true
    action?: true
    entityType?: true
    entityId?: true
    oldValue?: true
    newValue?: true
    performedBy?: true
    notes?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    resellerId?: true
    action?: true
    entityType?: true
    entityId?: true
    oldValue?: true
    newValue?: true
    performedBy?: true
    notes?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    resellerId?: true
    action?: true
    entityType?: true
    entityId?: true
    oldValue?: true
    newValue?: true
    performedBy?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    resellerId: string | null
    action: string
    entityType: string
    entityId: string
    oldValue: string | null
    newValue: string | null
    performedBy: string | null
    notes: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellerId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    performedBy?: boolean
    notes?: boolean
    createdAt?: boolean
    reseller?: boolean | AuditLog$resellerArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellerId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    performedBy?: boolean
    notes?: boolean
    createdAt?: boolean
    reseller?: boolean | AuditLog$resellerArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    resellerId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    performedBy?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reseller?: boolean | AuditLog$resellerArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reseller?: boolean | AuditLog$resellerArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      reseller: Prisma.$ResellerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resellerId: string | null
      action: string
      entityType: string
      entityId: string
      oldValue: string | null
      newValue: string | null
      performedBy: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reseller<T extends AuditLog$resellerArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$resellerArgs<ExtArgs>>): Prisma__ResellerClient<$Result.GetResult<Prisma.$ResellerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly resellerId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly oldValue: FieldRef<"AuditLog", 'String'>
    readonly newValue: FieldRef<"AuditLog", 'String'>
    readonly performedBy: FieldRef<"AuditLog", 'String'>
    readonly notes: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.reseller
   */
  export type AuditLog$resellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseller
     */
    select?: ResellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellerInclude<ExtArgs> | null
    where?: ResellerWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model DailySummary
   */

  export type AggregateDailySummary = {
    _count: DailySummaryCountAggregateOutputType | null
    _avg: DailySummaryAvgAggregateOutputType | null
    _sum: DailySummarySumAggregateOutputType | null
    _min: DailySummaryMinAggregateOutputType | null
    _max: DailySummaryMaxAggregateOutputType | null
  }

  export type DailySummaryAvgAggregateOutputType = {
    totalOrders: number | null
    successfulOrders: number | null
    failedOrders: number | null
    totalTurnover: number | null
    totalCost: number | null
    totalProfit: number | null
    totalDeposits: number | null
    depositAmount: number | null
    newResellers: number | null
  }

  export type DailySummarySumAggregateOutputType = {
    totalOrders: number | null
    successfulOrders: number | null
    failedOrders: number | null
    totalTurnover: bigint | null
    totalCost: bigint | null
    totalProfit: bigint | null
    totalDeposits: number | null
    depositAmount: bigint | null
    newResellers: number | null
  }

  export type DailySummaryMinAggregateOutputType = {
    id: string | null
    date: Date | null
    totalOrders: number | null
    successfulOrders: number | null
    failedOrders: number | null
    totalTurnover: bigint | null
    totalCost: bigint | null
    totalProfit: bigint | null
    totalDeposits: number | null
    depositAmount: bigint | null
    newResellers: number | null
    createdAt: Date | null
  }

  export type DailySummaryMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    totalOrders: number | null
    successfulOrders: number | null
    failedOrders: number | null
    totalTurnover: bigint | null
    totalCost: bigint | null
    totalProfit: bigint | null
    totalDeposits: number | null
    depositAmount: bigint | null
    newResellers: number | null
    createdAt: Date | null
  }

  export type DailySummaryCountAggregateOutputType = {
    id: number
    date: number
    totalOrders: number
    successfulOrders: number
    failedOrders: number
    totalTurnover: number
    totalCost: number
    totalProfit: number
    totalDeposits: number
    depositAmount: number
    newResellers: number
    createdAt: number
    _all: number
  }


  export type DailySummaryAvgAggregateInputType = {
    totalOrders?: true
    successfulOrders?: true
    failedOrders?: true
    totalTurnover?: true
    totalCost?: true
    totalProfit?: true
    totalDeposits?: true
    depositAmount?: true
    newResellers?: true
  }

  export type DailySummarySumAggregateInputType = {
    totalOrders?: true
    successfulOrders?: true
    failedOrders?: true
    totalTurnover?: true
    totalCost?: true
    totalProfit?: true
    totalDeposits?: true
    depositAmount?: true
    newResellers?: true
  }

  export type DailySummaryMinAggregateInputType = {
    id?: true
    date?: true
    totalOrders?: true
    successfulOrders?: true
    failedOrders?: true
    totalTurnover?: true
    totalCost?: true
    totalProfit?: true
    totalDeposits?: true
    depositAmount?: true
    newResellers?: true
    createdAt?: true
  }

  export type DailySummaryMaxAggregateInputType = {
    id?: true
    date?: true
    totalOrders?: true
    successfulOrders?: true
    failedOrders?: true
    totalTurnover?: true
    totalCost?: true
    totalProfit?: true
    totalDeposits?: true
    depositAmount?: true
    newResellers?: true
    createdAt?: true
  }

  export type DailySummaryCountAggregateInputType = {
    id?: true
    date?: true
    totalOrders?: true
    successfulOrders?: true
    failedOrders?: true
    totalTurnover?: true
    totalCost?: true
    totalProfit?: true
    totalDeposits?: true
    depositAmount?: true
    newResellers?: true
    createdAt?: true
    _all?: true
  }

  export type DailySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySummary to aggregate.
     */
    where?: DailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySummaries to fetch.
     */
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailySummaries
    **/
    _count?: true | DailySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailySummaryMaxAggregateInputType
  }

  export type GetDailySummaryAggregateType<T extends DailySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateDailySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailySummary[P]>
      : GetScalarType<T[P], AggregateDailySummary[P]>
  }




  export type DailySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySummaryWhereInput
    orderBy?: DailySummaryOrderByWithAggregationInput | DailySummaryOrderByWithAggregationInput[]
    by: DailySummaryScalarFieldEnum[] | DailySummaryScalarFieldEnum
    having?: DailySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailySummaryCountAggregateInputType | true
    _avg?: DailySummaryAvgAggregateInputType
    _sum?: DailySummarySumAggregateInputType
    _min?: DailySummaryMinAggregateInputType
    _max?: DailySummaryMaxAggregateInputType
  }

  export type DailySummaryGroupByOutputType = {
    id: string
    date: Date
    totalOrders: number
    successfulOrders: number
    failedOrders: number
    totalTurnover: bigint
    totalCost: bigint
    totalProfit: bigint
    totalDeposits: number
    depositAmount: bigint
    newResellers: number
    createdAt: Date
    _count: DailySummaryCountAggregateOutputType | null
    _avg: DailySummaryAvgAggregateOutputType | null
    _sum: DailySummarySumAggregateOutputType | null
    _min: DailySummaryMinAggregateOutputType | null
    _max: DailySummaryMaxAggregateOutputType | null
  }

  type GetDailySummaryGroupByPayload<T extends DailySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], DailySummaryGroupByOutputType[P]>
        }
      >
    >


  export type DailySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalOrders?: boolean
    successfulOrders?: boolean
    failedOrders?: boolean
    totalTurnover?: boolean
    totalCost?: boolean
    totalProfit?: boolean
    totalDeposits?: boolean
    depositAmount?: boolean
    newResellers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailySummary"]>

  export type DailySummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalOrders?: boolean
    successfulOrders?: boolean
    failedOrders?: boolean
    totalTurnover?: boolean
    totalCost?: boolean
    totalProfit?: boolean
    totalDeposits?: boolean
    depositAmount?: boolean
    newResellers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailySummary"]>

  export type DailySummarySelectScalar = {
    id?: boolean
    date?: boolean
    totalOrders?: boolean
    successfulOrders?: boolean
    failedOrders?: boolean
    totalTurnover?: boolean
    totalCost?: boolean
    totalProfit?: boolean
    totalDeposits?: boolean
    depositAmount?: boolean
    newResellers?: boolean
    createdAt?: boolean
  }


  export type $DailySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailySummary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      totalOrders: number
      successfulOrders: number
      failedOrders: number
      totalTurnover: bigint
      totalCost: bigint
      totalProfit: bigint
      totalDeposits: number
      depositAmount: bigint
      newResellers: number
      createdAt: Date
    }, ExtArgs["result"]["dailySummary"]>
    composites: {}
  }

  type DailySummaryGetPayload<S extends boolean | null | undefined | DailySummaryDefaultArgs> = $Result.GetResult<Prisma.$DailySummaryPayload, S>

  type DailySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailySummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailySummaryCountAggregateInputType | true
    }

  export interface DailySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailySummary'], meta: { name: 'DailySummary' } }
    /**
     * Find zero or one DailySummary that matches the filter.
     * @param {DailySummaryFindUniqueArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailySummaryFindUniqueArgs>(args: SelectSubset<T, DailySummaryFindUniqueArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailySummary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailySummaryFindUniqueOrThrowArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, DailySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryFindFirstArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailySummaryFindFirstArgs>(args?: SelectSubset<T, DailySummaryFindFirstArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryFindFirstOrThrowArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, DailySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailySummaries
     * const dailySummaries = await prisma.dailySummary.findMany()
     * 
     * // Get first 10 DailySummaries
     * const dailySummaries = await prisma.dailySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailySummaryWithIdOnly = await prisma.dailySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailySummaryFindManyArgs>(args?: SelectSubset<T, DailySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailySummary.
     * @param {DailySummaryCreateArgs} args - Arguments to create a DailySummary.
     * @example
     * // Create one DailySummary
     * const DailySummary = await prisma.dailySummary.create({
     *   data: {
     *     // ... data to create a DailySummary
     *   }
     * })
     * 
     */
    create<T extends DailySummaryCreateArgs>(args: SelectSubset<T, DailySummaryCreateArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailySummaries.
     * @param {DailySummaryCreateManyArgs} args - Arguments to create many DailySummaries.
     * @example
     * // Create many DailySummaries
     * const dailySummary = await prisma.dailySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailySummaryCreateManyArgs>(args?: SelectSubset<T, DailySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailySummaries and returns the data saved in the database.
     * @param {DailySummaryCreateManyAndReturnArgs} args - Arguments to create many DailySummaries.
     * @example
     * // Create many DailySummaries
     * const dailySummary = await prisma.dailySummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailySummaries and only return the `id`
     * const dailySummaryWithIdOnly = await prisma.dailySummary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailySummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, DailySummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailySummary.
     * @param {DailySummaryDeleteArgs} args - Arguments to delete one DailySummary.
     * @example
     * // Delete one DailySummary
     * const DailySummary = await prisma.dailySummary.delete({
     *   where: {
     *     // ... filter to delete one DailySummary
     *   }
     * })
     * 
     */
    delete<T extends DailySummaryDeleteArgs>(args: SelectSubset<T, DailySummaryDeleteArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailySummary.
     * @param {DailySummaryUpdateArgs} args - Arguments to update one DailySummary.
     * @example
     * // Update one DailySummary
     * const dailySummary = await prisma.dailySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailySummaryUpdateArgs>(args: SelectSubset<T, DailySummaryUpdateArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailySummaries.
     * @param {DailySummaryDeleteManyArgs} args - Arguments to filter DailySummaries to delete.
     * @example
     * // Delete a few DailySummaries
     * const { count } = await prisma.dailySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailySummaryDeleteManyArgs>(args?: SelectSubset<T, DailySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailySummaries
     * const dailySummary = await prisma.dailySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailySummaryUpdateManyArgs>(args: SelectSubset<T, DailySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailySummary.
     * @param {DailySummaryUpsertArgs} args - Arguments to update or create a DailySummary.
     * @example
     * // Update or create a DailySummary
     * const dailySummary = await prisma.dailySummary.upsert({
     *   create: {
     *     // ... data to create a DailySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailySummary we want to update
     *   }
     * })
     */
    upsert<T extends DailySummaryUpsertArgs>(args: SelectSubset<T, DailySummaryUpsertArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryCountArgs} args - Arguments to filter DailySummaries to count.
     * @example
     * // Count the number of DailySummaries
     * const count = await prisma.dailySummary.count({
     *   where: {
     *     // ... the filter for the DailySummaries we want to count
     *   }
     * })
    **/
    count<T extends DailySummaryCountArgs>(
      args?: Subset<T, DailySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailySummaryAggregateArgs>(args: Subset<T, DailySummaryAggregateArgs>): Prisma.PrismaPromise<GetDailySummaryAggregateType<T>>

    /**
     * Group by DailySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailySummaryGroupByArgs['orderBy'] }
        : { orderBy?: DailySummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailySummary model
   */
  readonly fields: DailySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailySummary model
   */ 
  interface DailySummaryFieldRefs {
    readonly id: FieldRef<"DailySummary", 'String'>
    readonly date: FieldRef<"DailySummary", 'DateTime'>
    readonly totalOrders: FieldRef<"DailySummary", 'Int'>
    readonly successfulOrders: FieldRef<"DailySummary", 'Int'>
    readonly failedOrders: FieldRef<"DailySummary", 'Int'>
    readonly totalTurnover: FieldRef<"DailySummary", 'BigInt'>
    readonly totalCost: FieldRef<"DailySummary", 'BigInt'>
    readonly totalProfit: FieldRef<"DailySummary", 'BigInt'>
    readonly totalDeposits: FieldRef<"DailySummary", 'Int'>
    readonly depositAmount: FieldRef<"DailySummary", 'BigInt'>
    readonly newResellers: FieldRef<"DailySummary", 'Int'>
    readonly createdAt: FieldRef<"DailySummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailySummary findUnique
   */
  export type DailySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Filter, which DailySummary to fetch.
     */
    where: DailySummaryWhereUniqueInput
  }

  /**
   * DailySummary findUniqueOrThrow
   */
  export type DailySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Filter, which DailySummary to fetch.
     */
    where: DailySummaryWhereUniqueInput
  }

  /**
   * DailySummary findFirst
   */
  export type DailySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Filter, which DailySummary to fetch.
     */
    where?: DailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySummaries to fetch.
     */
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySummaries.
     */
    cursor?: DailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySummaries.
     */
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * DailySummary findFirstOrThrow
   */
  export type DailySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Filter, which DailySummary to fetch.
     */
    where?: DailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySummaries to fetch.
     */
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySummaries.
     */
    cursor?: DailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySummaries.
     */
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * DailySummary findMany
   */
  export type DailySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Filter, which DailySummaries to fetch.
     */
    where?: DailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySummaries to fetch.
     */
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailySummaries.
     */
    cursor?: DailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySummaries.
     */
    skip?: number
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * DailySummary create
   */
  export type DailySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * The data needed to create a DailySummary.
     */
    data: XOR<DailySummaryCreateInput, DailySummaryUncheckedCreateInput>
  }

  /**
   * DailySummary createMany
   */
  export type DailySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailySummaries.
     */
    data: DailySummaryCreateManyInput | DailySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailySummary createManyAndReturn
   */
  export type DailySummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailySummaries.
     */
    data: DailySummaryCreateManyInput | DailySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailySummary update
   */
  export type DailySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * The data needed to update a DailySummary.
     */
    data: XOR<DailySummaryUpdateInput, DailySummaryUncheckedUpdateInput>
    /**
     * Choose, which DailySummary to update.
     */
    where: DailySummaryWhereUniqueInput
  }

  /**
   * DailySummary updateMany
   */
  export type DailySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailySummaries.
     */
    data: XOR<DailySummaryUpdateManyMutationInput, DailySummaryUncheckedUpdateManyInput>
    /**
     * Filter which DailySummaries to update
     */
    where?: DailySummaryWhereInput
  }

  /**
   * DailySummary upsert
   */
  export type DailySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * The filter to search for the DailySummary to update in case it exists.
     */
    where: DailySummaryWhereUniqueInput
    /**
     * In case the DailySummary found by the `where` argument doesn't exist, create a new DailySummary with this data.
     */
    create: XOR<DailySummaryCreateInput, DailySummaryUncheckedCreateInput>
    /**
     * In case the DailySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailySummaryUpdateInput, DailySummaryUncheckedUpdateInput>
  }

  /**
   * DailySummary delete
   */
  export type DailySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Filter which DailySummary to delete.
     */
    where: DailySummaryWhereUniqueInput
  }

  /**
   * DailySummary deleteMany
   */
  export type DailySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySummaries to delete
     */
    where?: DailySummaryWhereInput
  }

  /**
   * DailySummary without action
   */
  export type DailySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
  }


  /**
   * Model MonthlySummary
   */

  export type AggregateMonthlySummary = {
    _count: MonthlySummaryCountAggregateOutputType | null
    _avg: MonthlySummaryAvgAggregateOutputType | null
    _sum: MonthlySummarySumAggregateOutputType | null
    _min: MonthlySummaryMinAggregateOutputType | null
    _max: MonthlySummaryMaxAggregateOutputType | null
  }

  export type MonthlySummaryAvgAggregateOutputType = {
    year: number | null
    month: number | null
    totalOrders: number | null
    totalTurnover: number | null
    totalProfit: number | null
    averageOrderValue: number | null
    totalDeposits: number | null
    totalDepositAmount: number | null
    taxableIncome: number | null
    estimatedTax: number | null
  }

  export type MonthlySummarySumAggregateOutputType = {
    year: number | null
    month: number | null
    totalOrders: number | null
    totalTurnover: bigint | null
    totalProfit: bigint | null
    averageOrderValue: bigint | null
    totalDeposits: number | null
    totalDepositAmount: bigint | null
    taxableIncome: bigint | null
    estimatedTax: bigint | null
  }

  export type MonthlySummaryMinAggregateOutputType = {
    id: string | null
    year: number | null
    month: number | null
    totalOrders: number | null
    totalTurnover: bigint | null
    totalProfit: bigint | null
    averageOrderValue: bigint | null
    totalDeposits: number | null
    totalDepositAmount: bigint | null
    taxableIncome: bigint | null
    estimatedTax: bigint | null
    createdAt: Date | null
  }

  export type MonthlySummaryMaxAggregateOutputType = {
    id: string | null
    year: number | null
    month: number | null
    totalOrders: number | null
    totalTurnover: bigint | null
    totalProfit: bigint | null
    averageOrderValue: bigint | null
    totalDeposits: number | null
    totalDepositAmount: bigint | null
    taxableIncome: bigint | null
    estimatedTax: bigint | null
    createdAt: Date | null
  }

  export type MonthlySummaryCountAggregateOutputType = {
    id: number
    year: number
    month: number
    totalOrders: number
    totalTurnover: number
    totalProfit: number
    averageOrderValue: number
    totalDeposits: number
    totalDepositAmount: number
    taxableIncome: number
    estimatedTax: number
    createdAt: number
    _all: number
  }


  export type MonthlySummaryAvgAggregateInputType = {
    year?: true
    month?: true
    totalOrders?: true
    totalTurnover?: true
    totalProfit?: true
    averageOrderValue?: true
    totalDeposits?: true
    totalDepositAmount?: true
    taxableIncome?: true
    estimatedTax?: true
  }

  export type MonthlySummarySumAggregateInputType = {
    year?: true
    month?: true
    totalOrders?: true
    totalTurnover?: true
    totalProfit?: true
    averageOrderValue?: true
    totalDeposits?: true
    totalDepositAmount?: true
    taxableIncome?: true
    estimatedTax?: true
  }

  export type MonthlySummaryMinAggregateInputType = {
    id?: true
    year?: true
    month?: true
    totalOrders?: true
    totalTurnover?: true
    totalProfit?: true
    averageOrderValue?: true
    totalDeposits?: true
    totalDepositAmount?: true
    taxableIncome?: true
    estimatedTax?: true
    createdAt?: true
  }

  export type MonthlySummaryMaxAggregateInputType = {
    id?: true
    year?: true
    month?: true
    totalOrders?: true
    totalTurnover?: true
    totalProfit?: true
    averageOrderValue?: true
    totalDeposits?: true
    totalDepositAmount?: true
    taxableIncome?: true
    estimatedTax?: true
    createdAt?: true
  }

  export type MonthlySummaryCountAggregateInputType = {
    id?: true
    year?: true
    month?: true
    totalOrders?: true
    totalTurnover?: true
    totalProfit?: true
    averageOrderValue?: true
    totalDeposits?: true
    totalDepositAmount?: true
    taxableIncome?: true
    estimatedTax?: true
    createdAt?: true
    _all?: true
  }

  export type MonthlySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlySummary to aggregate.
     */
    where?: MonthlySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySummaries to fetch.
     */
    orderBy?: MonthlySummaryOrderByWithRelationInput | MonthlySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlySummaries
    **/
    _count?: true | MonthlySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlySummaryMaxAggregateInputType
  }

  export type GetMonthlySummaryAggregateType<T extends MonthlySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlySummary[P]>
      : GetScalarType<T[P], AggregateMonthlySummary[P]>
  }




  export type MonthlySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlySummaryWhereInput
    orderBy?: MonthlySummaryOrderByWithAggregationInput | MonthlySummaryOrderByWithAggregationInput[]
    by: MonthlySummaryScalarFieldEnum[] | MonthlySummaryScalarFieldEnum
    having?: MonthlySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlySummaryCountAggregateInputType | true
    _avg?: MonthlySummaryAvgAggregateInputType
    _sum?: MonthlySummarySumAggregateInputType
    _min?: MonthlySummaryMinAggregateInputType
    _max?: MonthlySummaryMaxAggregateInputType
  }

  export type MonthlySummaryGroupByOutputType = {
    id: string
    year: number
    month: number
    totalOrders: number
    totalTurnover: bigint
    totalProfit: bigint
    averageOrderValue: bigint
    totalDeposits: number
    totalDepositAmount: bigint
    taxableIncome: bigint
    estimatedTax: bigint
    createdAt: Date
    _count: MonthlySummaryCountAggregateOutputType | null
    _avg: MonthlySummaryAvgAggregateOutputType | null
    _sum: MonthlySummarySumAggregateOutputType | null
    _min: MonthlySummaryMinAggregateOutputType | null
    _max: MonthlySummaryMaxAggregateOutputType | null
  }

  type GetMonthlySummaryGroupByPayload<T extends MonthlySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlySummaryGroupByOutputType[P]>
        }
      >
    >


  export type MonthlySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    totalOrders?: boolean
    totalTurnover?: boolean
    totalProfit?: boolean
    averageOrderValue?: boolean
    totalDeposits?: boolean
    totalDepositAmount?: boolean
    taxableIncome?: boolean
    estimatedTax?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["monthlySummary"]>

  export type MonthlySummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    totalOrders?: boolean
    totalTurnover?: boolean
    totalProfit?: boolean
    averageOrderValue?: boolean
    totalDeposits?: boolean
    totalDepositAmount?: boolean
    taxableIncome?: boolean
    estimatedTax?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["monthlySummary"]>

  export type MonthlySummarySelectScalar = {
    id?: boolean
    year?: boolean
    month?: boolean
    totalOrders?: boolean
    totalTurnover?: boolean
    totalProfit?: boolean
    averageOrderValue?: boolean
    totalDeposits?: boolean
    totalDepositAmount?: boolean
    taxableIncome?: boolean
    estimatedTax?: boolean
    createdAt?: boolean
  }


  export type $MonthlySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlySummary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      month: number
      totalOrders: number
      totalTurnover: bigint
      totalProfit: bigint
      averageOrderValue: bigint
      totalDeposits: number
      totalDepositAmount: bigint
      taxableIncome: bigint
      estimatedTax: bigint
      createdAt: Date
    }, ExtArgs["result"]["monthlySummary"]>
    composites: {}
  }

  type MonthlySummaryGetPayload<S extends boolean | null | undefined | MonthlySummaryDefaultArgs> = $Result.GetResult<Prisma.$MonthlySummaryPayload, S>

  type MonthlySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonthlySummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonthlySummaryCountAggregateInputType | true
    }

  export interface MonthlySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlySummary'], meta: { name: 'MonthlySummary' } }
    /**
     * Find zero or one MonthlySummary that matches the filter.
     * @param {MonthlySummaryFindUniqueArgs} args - Arguments to find a MonthlySummary
     * @example
     * // Get one MonthlySummary
     * const monthlySummary = await prisma.monthlySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlySummaryFindUniqueArgs>(args: SelectSubset<T, MonthlySummaryFindUniqueArgs<ExtArgs>>): Prisma__MonthlySummaryClient<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MonthlySummary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonthlySummaryFindUniqueOrThrowArgs} args - Arguments to find a MonthlySummary
     * @example
     * // Get one MonthlySummary
     * const monthlySummary = await prisma.monthlySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlySummaryClient<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MonthlySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySummaryFindFirstArgs} args - Arguments to find a MonthlySummary
     * @example
     * // Get one MonthlySummary
     * const monthlySummary = await prisma.monthlySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlySummaryFindFirstArgs>(args?: SelectSubset<T, MonthlySummaryFindFirstArgs<ExtArgs>>): Prisma__MonthlySummaryClient<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MonthlySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySummaryFindFirstOrThrowArgs} args - Arguments to find a MonthlySummary
     * @example
     * // Get one MonthlySummary
     * const monthlySummary = await prisma.monthlySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlySummaryClient<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MonthlySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlySummaries
     * const monthlySummaries = await prisma.monthlySummary.findMany()
     * 
     * // Get first 10 MonthlySummaries
     * const monthlySummaries = await prisma.monthlySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlySummaryWithIdOnly = await prisma.monthlySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlySummaryFindManyArgs>(args?: SelectSubset<T, MonthlySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MonthlySummary.
     * @param {MonthlySummaryCreateArgs} args - Arguments to create a MonthlySummary.
     * @example
     * // Create one MonthlySummary
     * const MonthlySummary = await prisma.monthlySummary.create({
     *   data: {
     *     // ... data to create a MonthlySummary
     *   }
     * })
     * 
     */
    create<T extends MonthlySummaryCreateArgs>(args: SelectSubset<T, MonthlySummaryCreateArgs<ExtArgs>>): Prisma__MonthlySummaryClient<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MonthlySummaries.
     * @param {MonthlySummaryCreateManyArgs} args - Arguments to create many MonthlySummaries.
     * @example
     * // Create many MonthlySummaries
     * const monthlySummary = await prisma.monthlySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlySummaryCreateManyArgs>(args?: SelectSubset<T, MonthlySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlySummaries and returns the data saved in the database.
     * @param {MonthlySummaryCreateManyAndReturnArgs} args - Arguments to create many MonthlySummaries.
     * @example
     * // Create many MonthlySummaries
     * const monthlySummary = await prisma.monthlySummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlySummaries and only return the `id`
     * const monthlySummaryWithIdOnly = await prisma.monthlySummary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlySummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlySummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MonthlySummary.
     * @param {MonthlySummaryDeleteArgs} args - Arguments to delete one MonthlySummary.
     * @example
     * // Delete one MonthlySummary
     * const MonthlySummary = await prisma.monthlySummary.delete({
     *   where: {
     *     // ... filter to delete one MonthlySummary
     *   }
     * })
     * 
     */
    delete<T extends MonthlySummaryDeleteArgs>(args: SelectSubset<T, MonthlySummaryDeleteArgs<ExtArgs>>): Prisma__MonthlySummaryClient<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MonthlySummary.
     * @param {MonthlySummaryUpdateArgs} args - Arguments to update one MonthlySummary.
     * @example
     * // Update one MonthlySummary
     * const monthlySummary = await prisma.monthlySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlySummaryUpdateArgs>(args: SelectSubset<T, MonthlySummaryUpdateArgs<ExtArgs>>): Prisma__MonthlySummaryClient<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MonthlySummaries.
     * @param {MonthlySummaryDeleteManyArgs} args - Arguments to filter MonthlySummaries to delete.
     * @example
     * // Delete a few MonthlySummaries
     * const { count } = await prisma.monthlySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlySummaryDeleteManyArgs>(args?: SelectSubset<T, MonthlySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlySummaries
     * const monthlySummary = await prisma.monthlySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlySummaryUpdateManyArgs>(args: SelectSubset<T, MonthlySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlySummary.
     * @param {MonthlySummaryUpsertArgs} args - Arguments to update or create a MonthlySummary.
     * @example
     * // Update or create a MonthlySummary
     * const monthlySummary = await prisma.monthlySummary.upsert({
     *   create: {
     *     // ... data to create a MonthlySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlySummary we want to update
     *   }
     * })
     */
    upsert<T extends MonthlySummaryUpsertArgs>(args: SelectSubset<T, MonthlySummaryUpsertArgs<ExtArgs>>): Prisma__MonthlySummaryClient<$Result.GetResult<Prisma.$MonthlySummaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MonthlySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySummaryCountArgs} args - Arguments to filter MonthlySummaries to count.
     * @example
     * // Count the number of MonthlySummaries
     * const count = await prisma.monthlySummary.count({
     *   where: {
     *     // ... the filter for the MonthlySummaries we want to count
     *   }
     * })
    **/
    count<T extends MonthlySummaryCountArgs>(
      args?: Subset<T, MonthlySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlySummaryAggregateArgs>(args: Subset<T, MonthlySummaryAggregateArgs>): Prisma.PrismaPromise<GetMonthlySummaryAggregateType<T>>

    /**
     * Group by MonthlySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlySummaryGroupByArgs['orderBy'] }
        : { orderBy?: MonthlySummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlySummary model
   */
  readonly fields: MonthlySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlySummary model
   */ 
  interface MonthlySummaryFieldRefs {
    readonly id: FieldRef<"MonthlySummary", 'String'>
    readonly year: FieldRef<"MonthlySummary", 'Int'>
    readonly month: FieldRef<"MonthlySummary", 'Int'>
    readonly totalOrders: FieldRef<"MonthlySummary", 'Int'>
    readonly totalTurnover: FieldRef<"MonthlySummary", 'BigInt'>
    readonly totalProfit: FieldRef<"MonthlySummary", 'BigInt'>
    readonly averageOrderValue: FieldRef<"MonthlySummary", 'BigInt'>
    readonly totalDeposits: FieldRef<"MonthlySummary", 'Int'>
    readonly totalDepositAmount: FieldRef<"MonthlySummary", 'BigInt'>
    readonly taxableIncome: FieldRef<"MonthlySummary", 'BigInt'>
    readonly estimatedTax: FieldRef<"MonthlySummary", 'BigInt'>
    readonly createdAt: FieldRef<"MonthlySummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlySummary findUnique
   */
  export type MonthlySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * Filter, which MonthlySummary to fetch.
     */
    where: MonthlySummaryWhereUniqueInput
  }

  /**
   * MonthlySummary findUniqueOrThrow
   */
  export type MonthlySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * Filter, which MonthlySummary to fetch.
     */
    where: MonthlySummaryWhereUniqueInput
  }

  /**
   * MonthlySummary findFirst
   */
  export type MonthlySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * Filter, which MonthlySummary to fetch.
     */
    where?: MonthlySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySummaries to fetch.
     */
    orderBy?: MonthlySummaryOrderByWithRelationInput | MonthlySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlySummaries.
     */
    cursor?: MonthlySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlySummaries.
     */
    distinct?: MonthlySummaryScalarFieldEnum | MonthlySummaryScalarFieldEnum[]
  }

  /**
   * MonthlySummary findFirstOrThrow
   */
  export type MonthlySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * Filter, which MonthlySummary to fetch.
     */
    where?: MonthlySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySummaries to fetch.
     */
    orderBy?: MonthlySummaryOrderByWithRelationInput | MonthlySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlySummaries.
     */
    cursor?: MonthlySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlySummaries.
     */
    distinct?: MonthlySummaryScalarFieldEnum | MonthlySummaryScalarFieldEnum[]
  }

  /**
   * MonthlySummary findMany
   */
  export type MonthlySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * Filter, which MonthlySummaries to fetch.
     */
    where?: MonthlySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySummaries to fetch.
     */
    orderBy?: MonthlySummaryOrderByWithRelationInput | MonthlySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlySummaries.
     */
    cursor?: MonthlySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySummaries.
     */
    skip?: number
    distinct?: MonthlySummaryScalarFieldEnum | MonthlySummaryScalarFieldEnum[]
  }

  /**
   * MonthlySummary create
   */
  export type MonthlySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * The data needed to create a MonthlySummary.
     */
    data: XOR<MonthlySummaryCreateInput, MonthlySummaryUncheckedCreateInput>
  }

  /**
   * MonthlySummary createMany
   */
  export type MonthlySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlySummaries.
     */
    data: MonthlySummaryCreateManyInput | MonthlySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlySummary createManyAndReturn
   */
  export type MonthlySummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MonthlySummaries.
     */
    data: MonthlySummaryCreateManyInput | MonthlySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlySummary update
   */
  export type MonthlySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * The data needed to update a MonthlySummary.
     */
    data: XOR<MonthlySummaryUpdateInput, MonthlySummaryUncheckedUpdateInput>
    /**
     * Choose, which MonthlySummary to update.
     */
    where: MonthlySummaryWhereUniqueInput
  }

  /**
   * MonthlySummary updateMany
   */
  export type MonthlySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlySummaries.
     */
    data: XOR<MonthlySummaryUpdateManyMutationInput, MonthlySummaryUncheckedUpdateManyInput>
    /**
     * Filter which MonthlySummaries to update
     */
    where?: MonthlySummaryWhereInput
  }

  /**
   * MonthlySummary upsert
   */
  export type MonthlySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * The filter to search for the MonthlySummary to update in case it exists.
     */
    where: MonthlySummaryWhereUniqueInput
    /**
     * In case the MonthlySummary found by the `where` argument doesn't exist, create a new MonthlySummary with this data.
     */
    create: XOR<MonthlySummaryCreateInput, MonthlySummaryUncheckedCreateInput>
    /**
     * In case the MonthlySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlySummaryUpdateInput, MonthlySummaryUncheckedUpdateInput>
  }

  /**
   * MonthlySummary delete
   */
  export type MonthlySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
    /**
     * Filter which MonthlySummary to delete.
     */
    where: MonthlySummaryWhereUniqueInput
  }

  /**
   * MonthlySummary deleteMany
   */
  export type MonthlySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlySummaries to delete
     */
    where?: MonthlySummaryWhereInput
  }

  /**
   * MonthlySummary without action
   */
  export type MonthlySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySummary
     */
    select?: MonthlySummarySelect<ExtArgs> | null
  }


  /**
   * Model WebhookLog
   */

  export type AggregateWebhookLog = {
    _count: WebhookLogCountAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  export type WebhookLogMinAggregateOutputType = {
    id: string | null
    source: string | null
    event: string | null
    payload: string | null
    ipAddress: string | null
    isValid: boolean | null
    error: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type WebhookLogMaxAggregateOutputType = {
    id: string | null
    source: string | null
    event: string | null
    payload: string | null
    ipAddress: string | null
    isValid: boolean | null
    error: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type WebhookLogCountAggregateOutputType = {
    id: number
    source: number
    event: number
    payload: number
    ipAddress: number
    isValid: number
    error: number
    processedAt: number
    createdAt: number
    _all: number
  }


  export type WebhookLogMinAggregateInputType = {
    id?: true
    source?: true
    event?: true
    payload?: true
    ipAddress?: true
    isValid?: true
    error?: true
    processedAt?: true
    createdAt?: true
  }

  export type WebhookLogMaxAggregateInputType = {
    id?: true
    source?: true
    event?: true
    payload?: true
    ipAddress?: true
    isValid?: true
    error?: true
    processedAt?: true
    createdAt?: true
  }

  export type WebhookLogCountAggregateInputType = {
    id?: true
    source?: true
    event?: true
    payload?: true
    ipAddress?: true
    isValid?: true
    error?: true
    processedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLog to aggregate.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookLogs
    **/
    _count?: true | WebhookLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookLogMaxAggregateInputType
  }

  export type GetWebhookLogAggregateType<T extends WebhookLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookLog[P]>
      : GetScalarType<T[P], AggregateWebhookLog[P]>
  }




  export type WebhookLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithAggregationInput | WebhookLogOrderByWithAggregationInput[]
    by: WebhookLogScalarFieldEnum[] | WebhookLogScalarFieldEnum
    having?: WebhookLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookLogCountAggregateInputType | true
    _min?: WebhookLogMinAggregateInputType
    _max?: WebhookLogMaxAggregateInputType
  }

  export type WebhookLogGroupByOutputType = {
    id: string
    source: string
    event: string
    payload: string
    ipAddress: string | null
    isValid: boolean
    error: string | null
    processedAt: Date | null
    createdAt: Date
    _count: WebhookLogCountAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  type GetWebhookLogGroupByPayload<T extends WebhookLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
        }
      >
    >


  export type WebhookLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    event?: boolean
    payload?: boolean
    ipAddress?: boolean
    isValid?: boolean
    error?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    event?: boolean
    payload?: boolean
    ipAddress?: boolean
    isValid?: boolean
    error?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectScalar = {
    id?: boolean
    source?: boolean
    event?: boolean
    payload?: boolean
    ipAddress?: boolean
    isValid?: boolean
    error?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }


  export type $WebhookLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      event: string
      payload: string
      ipAddress: string | null
      isValid: boolean
      error: string | null
      processedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["webhookLog"]>
    composites: {}
  }

  type WebhookLogGetPayload<S extends boolean | null | undefined | WebhookLogDefaultArgs> = $Result.GetResult<Prisma.$WebhookLogPayload, S>

  type WebhookLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebhookLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebhookLogCountAggregateInputType | true
    }

  export interface WebhookLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookLog'], meta: { name: 'WebhookLog' } }
    /**
     * Find zero or one WebhookLog that matches the filter.
     * @param {WebhookLogFindUniqueArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookLogFindUniqueArgs>(args: SelectSubset<T, WebhookLogFindUniqueArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WebhookLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebhookLogFindUniqueOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WebhookLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookLogFindFirstArgs>(args?: SelectSubset<T, WebhookLogFindFirstArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WebhookLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WebhookLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany()
     * 
     * // Get first 10 WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookLogFindManyArgs>(args?: SelectSubset<T, WebhookLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WebhookLog.
     * @param {WebhookLogCreateArgs} args - Arguments to create a WebhookLog.
     * @example
     * // Create one WebhookLog
     * const WebhookLog = await prisma.webhookLog.create({
     *   data: {
     *     // ... data to create a WebhookLog
     *   }
     * })
     * 
     */
    create<T extends WebhookLogCreateArgs>(args: SelectSubset<T, WebhookLogCreateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WebhookLogs.
     * @param {WebhookLogCreateManyArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookLogCreateManyArgs>(args?: SelectSubset<T, WebhookLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookLogs and returns the data saved in the database.
     * @param {WebhookLogCreateManyAndReturnArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookLogs and only return the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WebhookLog.
     * @param {WebhookLogDeleteArgs} args - Arguments to delete one WebhookLog.
     * @example
     * // Delete one WebhookLog
     * const WebhookLog = await prisma.webhookLog.delete({
     *   where: {
     *     // ... filter to delete one WebhookLog
     *   }
     * })
     * 
     */
    delete<T extends WebhookLogDeleteArgs>(args: SelectSubset<T, WebhookLogDeleteArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WebhookLog.
     * @param {WebhookLogUpdateArgs} args - Arguments to update one WebhookLog.
     * @example
     * // Update one WebhookLog
     * const webhookLog = await prisma.webhookLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookLogUpdateArgs>(args: SelectSubset<T, WebhookLogUpdateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WebhookLogs.
     * @param {WebhookLogDeleteManyArgs} args - Arguments to filter WebhookLogs to delete.
     * @example
     * // Delete a few WebhookLogs
     * const { count } = await prisma.webhookLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookLogDeleteManyArgs>(args?: SelectSubset<T, WebhookLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookLogs
     * const webhookLog = await prisma.webhookLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookLogUpdateManyArgs>(args: SelectSubset<T, WebhookLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebhookLog.
     * @param {WebhookLogUpsertArgs} args - Arguments to update or create a WebhookLog.
     * @example
     * // Update or create a WebhookLog
     * const webhookLog = await prisma.webhookLog.upsert({
     *   create: {
     *     // ... data to create a WebhookLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookLog we want to update
     *   }
     * })
     */
    upsert<T extends WebhookLogUpsertArgs>(args: SelectSubset<T, WebhookLogUpsertArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogCountArgs} args - Arguments to filter WebhookLogs to count.
     * @example
     * // Count the number of WebhookLogs
     * const count = await prisma.webhookLog.count({
     *   where: {
     *     // ... the filter for the WebhookLogs we want to count
     *   }
     * })
    **/
    count<T extends WebhookLogCountArgs>(
      args?: Subset<T, WebhookLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookLogAggregateArgs>(args: Subset<T, WebhookLogAggregateArgs>): Prisma.PrismaPromise<GetWebhookLogAggregateType<T>>

    /**
     * Group by WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookLogGroupByArgs['orderBy'] }
        : { orderBy?: WebhookLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookLog model
   */
  readonly fields: WebhookLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookLog model
   */ 
  interface WebhookLogFieldRefs {
    readonly id: FieldRef<"WebhookLog", 'String'>
    readonly source: FieldRef<"WebhookLog", 'String'>
    readonly event: FieldRef<"WebhookLog", 'String'>
    readonly payload: FieldRef<"WebhookLog", 'String'>
    readonly ipAddress: FieldRef<"WebhookLog", 'String'>
    readonly isValid: FieldRef<"WebhookLog", 'Boolean'>
    readonly error: FieldRef<"WebhookLog", 'String'>
    readonly processedAt: FieldRef<"WebhookLog", 'DateTime'>
    readonly createdAt: FieldRef<"WebhookLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookLog findUnique
   */
  export type WebhookLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findUniqueOrThrow
   */
  export type WebhookLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findFirst
   */
  export type WebhookLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findFirstOrThrow
   */
  export type WebhookLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findMany
   */
  export type WebhookLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which WebhookLogs to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog create
   */
  export type WebhookLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * The data needed to create a WebhookLog.
     */
    data: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
  }

  /**
   * WebhookLog createMany
   */
  export type WebhookLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookLog createManyAndReturn
   */
  export type WebhookLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookLog update
   */
  export type WebhookLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * The data needed to update a WebhookLog.
     */
    data: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
    /**
     * Choose, which WebhookLog to update.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog updateMany
   */
  export type WebhookLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookLogs.
     */
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which WebhookLogs to update
     */
    where?: WebhookLogWhereInput
  }

  /**
   * WebhookLog upsert
   */
  export type WebhookLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * The filter to search for the WebhookLog to update in case it exists.
     */
    where: WebhookLogWhereUniqueInput
    /**
     * In case the WebhookLog found by the `where` argument doesn't exist, create a new WebhookLog with this data.
     */
    create: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
    /**
     * In case the WebhookLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
  }

  /**
   * WebhookLog delete
   */
  export type WebhookLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Filter which WebhookLog to delete.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog deleteMany
   */
  export type WebhookLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLogs to delete
     */
    where?: WebhookLogWhereInput
  }

  /**
   * WebhookLog without action
   */
  export type WebhookLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
  }


  /**
   * Model ProductPricing
   */

  export type AggregateProductPricing = {
    _count: ProductPricingCountAggregateOutputType | null
    _avg: ProductPricingAvgAggregateOutputType | null
    _sum: ProductPricingSumAggregateOutputType | null
    _min: ProductPricingMinAggregateOutputType | null
    _max: ProductPricingMaxAggregateOutputType | null
  }

  export type ProductPricingAvgAggregateOutputType = {
    denomination: number | null
    supplierPrice: number | null
  }

  export type ProductPricingSumAggregateOutputType = {
    denomination: number | null
    supplierPrice: bigint | null
  }

  export type ProductPricingMinAggregateOutputType = {
    id: string | null
    productId: string | null
    denomination: number | null
    supplierPrice: bigint | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductPricingMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    denomination: number | null
    supplierPrice: bigint | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductPricingCountAggregateOutputType = {
    id: number
    productId: number
    denomination: number
    supplierPrice: number
    effectiveFrom: number
    effectiveTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductPricingAvgAggregateInputType = {
    denomination?: true
    supplierPrice?: true
  }

  export type ProductPricingSumAggregateInputType = {
    denomination?: true
    supplierPrice?: true
  }

  export type ProductPricingMinAggregateInputType = {
    id?: true
    productId?: true
    denomination?: true
    supplierPrice?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductPricingMaxAggregateInputType = {
    id?: true
    productId?: true
    denomination?: true
    supplierPrice?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductPricingCountAggregateInputType = {
    id?: true
    productId?: true
    denomination?: true
    supplierPrice?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductPricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPricing to aggregate.
     */
    where?: ProductPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPricings to fetch.
     */
    orderBy?: ProductPricingOrderByWithRelationInput | ProductPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPricings
    **/
    _count?: true | ProductPricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPricingMaxAggregateInputType
  }

  export type GetProductPricingAggregateType<T extends ProductPricingAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPricing[P]>
      : GetScalarType<T[P], AggregateProductPricing[P]>
  }




  export type ProductPricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPricingWhereInput
    orderBy?: ProductPricingOrderByWithAggregationInput | ProductPricingOrderByWithAggregationInput[]
    by: ProductPricingScalarFieldEnum[] | ProductPricingScalarFieldEnum
    having?: ProductPricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPricingCountAggregateInputType | true
    _avg?: ProductPricingAvgAggregateInputType
    _sum?: ProductPricingSumAggregateInputType
    _min?: ProductPricingMinAggregateInputType
    _max?: ProductPricingMaxAggregateInputType
  }

  export type ProductPricingGroupByOutputType = {
    id: string
    productId: string
    denomination: number
    supplierPrice: bigint
    effectiveFrom: Date
    effectiveTo: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProductPricingCountAggregateOutputType | null
    _avg: ProductPricingAvgAggregateOutputType | null
    _sum: ProductPricingSumAggregateOutputType | null
    _min: ProductPricingMinAggregateOutputType | null
    _max: ProductPricingMaxAggregateOutputType | null
  }

  type GetProductPricingGroupByPayload<T extends ProductPricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPricingGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPricingGroupByOutputType[P]>
        }
      >
    >


  export type ProductPricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    denomination?: boolean
    supplierPrice?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPricing"]>

  export type ProductPricingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    denomination?: boolean
    supplierPrice?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPricing"]>

  export type ProductPricingSelectScalar = {
    id?: boolean
    productId?: boolean
    denomination?: boolean
    supplierPrice?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductPricingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductPricingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductPricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPricing"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      denomination: number
      supplierPrice: bigint
      effectiveFrom: Date
      effectiveTo: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productPricing"]>
    composites: {}
  }

  type ProductPricingGetPayload<S extends boolean | null | undefined | ProductPricingDefaultArgs> = $Result.GetResult<Prisma.$ProductPricingPayload, S>

  type ProductPricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductPricingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductPricingCountAggregateInputType | true
    }

  export interface ProductPricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPricing'], meta: { name: 'ProductPricing' } }
    /**
     * Find zero or one ProductPricing that matches the filter.
     * @param {ProductPricingFindUniqueArgs} args - Arguments to find a ProductPricing
     * @example
     * // Get one ProductPricing
     * const productPricing = await prisma.productPricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPricingFindUniqueArgs>(args: SelectSubset<T, ProductPricingFindUniqueArgs<ExtArgs>>): Prisma__ProductPricingClient<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductPricing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductPricingFindUniqueOrThrowArgs} args - Arguments to find a ProductPricing
     * @example
     * // Get one ProductPricing
     * const productPricing = await prisma.productPricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPricingFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPricingClient<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductPricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricingFindFirstArgs} args - Arguments to find a ProductPricing
     * @example
     * // Get one ProductPricing
     * const productPricing = await prisma.productPricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPricingFindFirstArgs>(args?: SelectSubset<T, ProductPricingFindFirstArgs<ExtArgs>>): Prisma__ProductPricingClient<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductPricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricingFindFirstOrThrowArgs} args - Arguments to find a ProductPricing
     * @example
     * // Get one ProductPricing
     * const productPricing = await prisma.productPricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPricingFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPricingClient<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductPricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPricings
     * const productPricings = await prisma.productPricing.findMany()
     * 
     * // Get first 10 ProductPricings
     * const productPricings = await prisma.productPricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPricingWithIdOnly = await prisma.productPricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPricingFindManyArgs>(args?: SelectSubset<T, ProductPricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductPricing.
     * @param {ProductPricingCreateArgs} args - Arguments to create a ProductPricing.
     * @example
     * // Create one ProductPricing
     * const ProductPricing = await prisma.productPricing.create({
     *   data: {
     *     // ... data to create a ProductPricing
     *   }
     * })
     * 
     */
    create<T extends ProductPricingCreateArgs>(args: SelectSubset<T, ProductPricingCreateArgs<ExtArgs>>): Prisma__ProductPricingClient<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductPricings.
     * @param {ProductPricingCreateManyArgs} args - Arguments to create many ProductPricings.
     * @example
     * // Create many ProductPricings
     * const productPricing = await prisma.productPricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPricingCreateManyArgs>(args?: SelectSubset<T, ProductPricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPricings and returns the data saved in the database.
     * @param {ProductPricingCreateManyAndReturnArgs} args - Arguments to create many ProductPricings.
     * @example
     * // Create many ProductPricings
     * const productPricing = await prisma.productPricing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPricings and only return the `id`
     * const productPricingWithIdOnly = await prisma.productPricing.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPricingCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPricingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductPricing.
     * @param {ProductPricingDeleteArgs} args - Arguments to delete one ProductPricing.
     * @example
     * // Delete one ProductPricing
     * const ProductPricing = await prisma.productPricing.delete({
     *   where: {
     *     // ... filter to delete one ProductPricing
     *   }
     * })
     * 
     */
    delete<T extends ProductPricingDeleteArgs>(args: SelectSubset<T, ProductPricingDeleteArgs<ExtArgs>>): Prisma__ProductPricingClient<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductPricing.
     * @param {ProductPricingUpdateArgs} args - Arguments to update one ProductPricing.
     * @example
     * // Update one ProductPricing
     * const productPricing = await prisma.productPricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPricingUpdateArgs>(args: SelectSubset<T, ProductPricingUpdateArgs<ExtArgs>>): Prisma__ProductPricingClient<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductPricings.
     * @param {ProductPricingDeleteManyArgs} args - Arguments to filter ProductPricings to delete.
     * @example
     * // Delete a few ProductPricings
     * const { count } = await prisma.productPricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPricingDeleteManyArgs>(args?: SelectSubset<T, ProductPricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPricings
     * const productPricing = await prisma.productPricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPricingUpdateManyArgs>(args: SelectSubset<T, ProductPricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPricing.
     * @param {ProductPricingUpsertArgs} args - Arguments to update or create a ProductPricing.
     * @example
     * // Update or create a ProductPricing
     * const productPricing = await prisma.productPricing.upsert({
     *   create: {
     *     // ... data to create a ProductPricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPricing we want to update
     *   }
     * })
     */
    upsert<T extends ProductPricingUpsertArgs>(args: SelectSubset<T, ProductPricingUpsertArgs<ExtArgs>>): Prisma__ProductPricingClient<$Result.GetResult<Prisma.$ProductPricingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricingCountArgs} args - Arguments to filter ProductPricings to count.
     * @example
     * // Count the number of ProductPricings
     * const count = await prisma.productPricing.count({
     *   where: {
     *     // ... the filter for the ProductPricings we want to count
     *   }
     * })
    **/
    count<T extends ProductPricingCountArgs>(
      args?: Subset<T, ProductPricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductPricingAggregateArgs>(args: Subset<T, ProductPricingAggregateArgs>): Prisma.PrismaPromise<GetProductPricingAggregateType<T>>

    /**
     * Group by ProductPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPricingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductPricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPricingGroupByArgs['orderBy'] }
        : { orderBy?: ProductPricingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductPricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPricing model
   */
  readonly fields: ProductPricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPricing model
   */ 
  interface ProductPricingFieldRefs {
    readonly id: FieldRef<"ProductPricing", 'String'>
    readonly productId: FieldRef<"ProductPricing", 'String'>
    readonly denomination: FieldRef<"ProductPricing", 'Int'>
    readonly supplierPrice: FieldRef<"ProductPricing", 'BigInt'>
    readonly effectiveFrom: FieldRef<"ProductPricing", 'DateTime'>
    readonly effectiveTo: FieldRef<"ProductPricing", 'DateTime'>
    readonly createdAt: FieldRef<"ProductPricing", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductPricing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductPricing findUnique
   */
  export type ProductPricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * Filter, which ProductPricing to fetch.
     */
    where: ProductPricingWhereUniqueInput
  }

  /**
   * ProductPricing findUniqueOrThrow
   */
  export type ProductPricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * Filter, which ProductPricing to fetch.
     */
    where: ProductPricingWhereUniqueInput
  }

  /**
   * ProductPricing findFirst
   */
  export type ProductPricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * Filter, which ProductPricing to fetch.
     */
    where?: ProductPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPricings to fetch.
     */
    orderBy?: ProductPricingOrderByWithRelationInput | ProductPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPricings.
     */
    cursor?: ProductPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPricings.
     */
    distinct?: ProductPricingScalarFieldEnum | ProductPricingScalarFieldEnum[]
  }

  /**
   * ProductPricing findFirstOrThrow
   */
  export type ProductPricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * Filter, which ProductPricing to fetch.
     */
    where?: ProductPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPricings to fetch.
     */
    orderBy?: ProductPricingOrderByWithRelationInput | ProductPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPricings.
     */
    cursor?: ProductPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPricings.
     */
    distinct?: ProductPricingScalarFieldEnum | ProductPricingScalarFieldEnum[]
  }

  /**
   * ProductPricing findMany
   */
  export type ProductPricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * Filter, which ProductPricings to fetch.
     */
    where?: ProductPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPricings to fetch.
     */
    orderBy?: ProductPricingOrderByWithRelationInput | ProductPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPricings.
     */
    cursor?: ProductPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPricings.
     */
    skip?: number
    distinct?: ProductPricingScalarFieldEnum | ProductPricingScalarFieldEnum[]
  }

  /**
   * ProductPricing create
   */
  export type ProductPricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPricing.
     */
    data: XOR<ProductPricingCreateInput, ProductPricingUncheckedCreateInput>
  }

  /**
   * ProductPricing createMany
   */
  export type ProductPricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPricings.
     */
    data: ProductPricingCreateManyInput | ProductPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductPricing createManyAndReturn
   */
  export type ProductPricingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductPricings.
     */
    data: ProductPricingCreateManyInput | ProductPricingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductPricing update
   */
  export type ProductPricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPricing.
     */
    data: XOR<ProductPricingUpdateInput, ProductPricingUncheckedUpdateInput>
    /**
     * Choose, which ProductPricing to update.
     */
    where: ProductPricingWhereUniqueInput
  }

  /**
   * ProductPricing updateMany
   */
  export type ProductPricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPricings.
     */
    data: XOR<ProductPricingUpdateManyMutationInput, ProductPricingUncheckedUpdateManyInput>
    /**
     * Filter which ProductPricings to update
     */
    where?: ProductPricingWhereInput
  }

  /**
   * ProductPricing upsert
   */
  export type ProductPricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPricing to update in case it exists.
     */
    where: ProductPricingWhereUniqueInput
    /**
     * In case the ProductPricing found by the `where` argument doesn't exist, create a new ProductPricing with this data.
     */
    create: XOR<ProductPricingCreateInput, ProductPricingUncheckedCreateInput>
    /**
     * In case the ProductPricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPricingUpdateInput, ProductPricingUncheckedUpdateInput>
  }

  /**
   * ProductPricing delete
   */
  export type ProductPricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
    /**
     * Filter which ProductPricing to delete.
     */
    where: ProductPricingWhereUniqueInput
  }

  /**
   * ProductPricing deleteMany
   */
  export type ProductPricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPricings to delete
     */
    where?: ProductPricingWhereInput
  }

  /**
   * ProductPricing without action
   */
  export type ProductPricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPricing
     */
    select?: ProductPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPricingInclude<ExtArgs> | null
  }


  /**
   * Model SupplierPanel
   */

  export type AggregateSupplierPanel = {
    _count: SupplierPanelCountAggregateOutputType | null
    _avg: SupplierPanelAvgAggregateOutputType | null
    _sum: SupplierPanelSumAggregateOutputType | null
    _min: SupplierPanelMinAggregateOutputType | null
    _max: SupplierPanelMaxAggregateOutputType | null
  }

  export type SupplierPanelAvgAggregateOutputType = {
    priority: number | null
    successRate: number | null
    avgResponseTimeMs: number | null
    totalRequests: number | null
    totalSuccesses: number | null
    totalFailures: number | null
  }

  export type SupplierPanelSumAggregateOutputType = {
    priority: number | null
    successRate: number | null
    avgResponseTimeMs: number | null
    totalRequests: number | null
    totalSuccesses: number | null
    totalFailures: number | null
  }

  export type SupplierPanelMinAggregateOutputType = {
    id: string | null
    name: string | null
    apiUrl: string | null
    apiKey: string | null
    isActive: boolean | null
    priority: number | null
    healthStatus: string | null
    successRate: number | null
    avgResponseTimeMs: number | null
    lastHealthCheck: Date | null
    totalRequests: number | null
    totalSuccesses: number | null
    totalFailures: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierPanelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    apiUrl: string | null
    apiKey: string | null
    isActive: boolean | null
    priority: number | null
    healthStatus: string | null
    successRate: number | null
    avgResponseTimeMs: number | null
    lastHealthCheck: Date | null
    totalRequests: number | null
    totalSuccesses: number | null
    totalFailures: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierPanelCountAggregateOutputType = {
    id: number
    name: number
    apiUrl: number
    apiKey: number
    isActive: number
    priority: number
    healthStatus: number
    successRate: number
    avgResponseTimeMs: number
    lastHealthCheck: number
    totalRequests: number
    totalSuccesses: number
    totalFailures: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierPanelAvgAggregateInputType = {
    priority?: true
    successRate?: true
    avgResponseTimeMs?: true
    totalRequests?: true
    totalSuccesses?: true
    totalFailures?: true
  }

  export type SupplierPanelSumAggregateInputType = {
    priority?: true
    successRate?: true
    avgResponseTimeMs?: true
    totalRequests?: true
    totalSuccesses?: true
    totalFailures?: true
  }

  export type SupplierPanelMinAggregateInputType = {
    id?: true
    name?: true
    apiUrl?: true
    apiKey?: true
    isActive?: true
    priority?: true
    healthStatus?: true
    successRate?: true
    avgResponseTimeMs?: true
    lastHealthCheck?: true
    totalRequests?: true
    totalSuccesses?: true
    totalFailures?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierPanelMaxAggregateInputType = {
    id?: true
    name?: true
    apiUrl?: true
    apiKey?: true
    isActive?: true
    priority?: true
    healthStatus?: true
    successRate?: true
    avgResponseTimeMs?: true
    lastHealthCheck?: true
    totalRequests?: true
    totalSuccesses?: true
    totalFailures?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierPanelCountAggregateInputType = {
    id?: true
    name?: true
    apiUrl?: true
    apiKey?: true
    isActive?: true
    priority?: true
    healthStatus?: true
    successRate?: true
    avgResponseTimeMs?: true
    lastHealthCheck?: true
    totalRequests?: true
    totalSuccesses?: true
    totalFailures?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierPanelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPanel to aggregate.
     */
    where?: SupplierPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPanels to fetch.
     */
    orderBy?: SupplierPanelOrderByWithRelationInput | SupplierPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierPanels
    **/
    _count?: true | SupplierPanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierPanelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierPanelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierPanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierPanelMaxAggregateInputType
  }

  export type GetSupplierPanelAggregateType<T extends SupplierPanelAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierPanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierPanel[P]>
      : GetScalarType<T[P], AggregateSupplierPanel[P]>
  }




  export type SupplierPanelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPanelWhereInput
    orderBy?: SupplierPanelOrderByWithAggregationInput | SupplierPanelOrderByWithAggregationInput[]
    by: SupplierPanelScalarFieldEnum[] | SupplierPanelScalarFieldEnum
    having?: SupplierPanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierPanelCountAggregateInputType | true
    _avg?: SupplierPanelAvgAggregateInputType
    _sum?: SupplierPanelSumAggregateInputType
    _min?: SupplierPanelMinAggregateInputType
    _max?: SupplierPanelMaxAggregateInputType
  }

  export type SupplierPanelGroupByOutputType = {
    id: string
    name: string
    apiUrl: string
    apiKey: string
    isActive: boolean
    priority: number
    healthStatus: string
    successRate: number
    avgResponseTimeMs: number
    lastHealthCheck: Date | null
    totalRequests: number
    totalSuccesses: number
    totalFailures: number
    createdAt: Date
    updatedAt: Date
    _count: SupplierPanelCountAggregateOutputType | null
    _avg: SupplierPanelAvgAggregateOutputType | null
    _sum: SupplierPanelSumAggregateOutputType | null
    _min: SupplierPanelMinAggregateOutputType | null
    _max: SupplierPanelMaxAggregateOutputType | null
  }

  type GetSupplierPanelGroupByPayload<T extends SupplierPanelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierPanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierPanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierPanelGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierPanelGroupByOutputType[P]>
        }
      >
    >


  export type SupplierPanelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    isActive?: boolean
    priority?: boolean
    healthStatus?: boolean
    successRate?: boolean
    avgResponseTimeMs?: boolean
    lastHealthCheck?: boolean
    totalRequests?: boolean
    totalSuccesses?: boolean
    totalFailures?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | SupplierPanel$productsArgs<ExtArgs>
    healthMetrics?: boolean | SupplierPanel$healthMetricsArgs<ExtArgs>
    _count?: boolean | SupplierPanelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPanel"]>

  export type SupplierPanelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    isActive?: boolean
    priority?: boolean
    healthStatus?: boolean
    successRate?: boolean
    avgResponseTimeMs?: boolean
    lastHealthCheck?: boolean
    totalRequests?: boolean
    totalSuccesses?: boolean
    totalFailures?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplierPanel"]>

  export type SupplierPanelSelectScalar = {
    id?: boolean
    name?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    isActive?: boolean
    priority?: boolean
    healthStatus?: boolean
    successRate?: boolean
    avgResponseTimeMs?: boolean
    lastHealthCheck?: boolean
    totalRequests?: boolean
    totalSuccesses?: boolean
    totalFailures?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierPanelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SupplierPanel$productsArgs<ExtArgs>
    healthMetrics?: boolean | SupplierPanel$healthMetricsArgs<ExtArgs>
    _count?: boolean | SupplierPanelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierPanelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPanelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierPanel"
    objects: {
      products: Prisma.$SupplierProductPayload<ExtArgs>[]
      healthMetrics: Prisma.$SupplierHealthMetricPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      apiUrl: string
      apiKey: string
      isActive: boolean
      priority: number
      healthStatus: string
      successRate: number
      avgResponseTimeMs: number
      lastHealthCheck: Date | null
      totalRequests: number
      totalSuccesses: number
      totalFailures: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplierPanel"]>
    composites: {}
  }

  type SupplierPanelGetPayload<S extends boolean | null | undefined | SupplierPanelDefaultArgs> = $Result.GetResult<Prisma.$SupplierPanelPayload, S>

  type SupplierPanelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierPanelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierPanelCountAggregateInputType | true
    }

  export interface SupplierPanelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierPanel'], meta: { name: 'SupplierPanel' } }
    /**
     * Find zero or one SupplierPanel that matches the filter.
     * @param {SupplierPanelFindUniqueArgs} args - Arguments to find a SupplierPanel
     * @example
     * // Get one SupplierPanel
     * const supplierPanel = await prisma.supplierPanel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierPanelFindUniqueArgs>(args: SelectSubset<T, SupplierPanelFindUniqueArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierPanel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierPanelFindUniqueOrThrowArgs} args - Arguments to find a SupplierPanel
     * @example
     * // Get one SupplierPanel
     * const supplierPanel = await prisma.supplierPanel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierPanelFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierPanelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierPanel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPanelFindFirstArgs} args - Arguments to find a SupplierPanel
     * @example
     * // Get one SupplierPanel
     * const supplierPanel = await prisma.supplierPanel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierPanelFindFirstArgs>(args?: SelectSubset<T, SupplierPanelFindFirstArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierPanel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPanelFindFirstOrThrowArgs} args - Arguments to find a SupplierPanel
     * @example
     * // Get one SupplierPanel
     * const supplierPanel = await prisma.supplierPanel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierPanelFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierPanelFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierPanels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPanelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierPanels
     * const supplierPanels = await prisma.supplierPanel.findMany()
     * 
     * // Get first 10 SupplierPanels
     * const supplierPanels = await prisma.supplierPanel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierPanelWithIdOnly = await prisma.supplierPanel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierPanelFindManyArgs>(args?: SelectSubset<T, SupplierPanelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierPanel.
     * @param {SupplierPanelCreateArgs} args - Arguments to create a SupplierPanel.
     * @example
     * // Create one SupplierPanel
     * const SupplierPanel = await prisma.supplierPanel.create({
     *   data: {
     *     // ... data to create a SupplierPanel
     *   }
     * })
     * 
     */
    create<T extends SupplierPanelCreateArgs>(args: SelectSubset<T, SupplierPanelCreateArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierPanels.
     * @param {SupplierPanelCreateManyArgs} args - Arguments to create many SupplierPanels.
     * @example
     * // Create many SupplierPanels
     * const supplierPanel = await prisma.supplierPanel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierPanelCreateManyArgs>(args?: SelectSubset<T, SupplierPanelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierPanels and returns the data saved in the database.
     * @param {SupplierPanelCreateManyAndReturnArgs} args - Arguments to create many SupplierPanels.
     * @example
     * // Create many SupplierPanels
     * const supplierPanel = await prisma.supplierPanel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierPanels and only return the `id`
     * const supplierPanelWithIdOnly = await prisma.supplierPanel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierPanelCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierPanelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierPanel.
     * @param {SupplierPanelDeleteArgs} args - Arguments to delete one SupplierPanel.
     * @example
     * // Delete one SupplierPanel
     * const SupplierPanel = await prisma.supplierPanel.delete({
     *   where: {
     *     // ... filter to delete one SupplierPanel
     *   }
     * })
     * 
     */
    delete<T extends SupplierPanelDeleteArgs>(args: SelectSubset<T, SupplierPanelDeleteArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierPanel.
     * @param {SupplierPanelUpdateArgs} args - Arguments to update one SupplierPanel.
     * @example
     * // Update one SupplierPanel
     * const supplierPanel = await prisma.supplierPanel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierPanelUpdateArgs>(args: SelectSubset<T, SupplierPanelUpdateArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierPanels.
     * @param {SupplierPanelDeleteManyArgs} args - Arguments to filter SupplierPanels to delete.
     * @example
     * // Delete a few SupplierPanels
     * const { count } = await prisma.supplierPanel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierPanelDeleteManyArgs>(args?: SelectSubset<T, SupplierPanelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierPanels
     * const supplierPanel = await prisma.supplierPanel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierPanelUpdateManyArgs>(args: SelectSubset<T, SupplierPanelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierPanel.
     * @param {SupplierPanelUpsertArgs} args - Arguments to update or create a SupplierPanel.
     * @example
     * // Update or create a SupplierPanel
     * const supplierPanel = await prisma.supplierPanel.upsert({
     *   create: {
     *     // ... data to create a SupplierPanel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierPanel we want to update
     *   }
     * })
     */
    upsert<T extends SupplierPanelUpsertArgs>(args: SelectSubset<T, SupplierPanelUpsertArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPanelCountArgs} args - Arguments to filter SupplierPanels to count.
     * @example
     * // Count the number of SupplierPanels
     * const count = await prisma.supplierPanel.count({
     *   where: {
     *     // ... the filter for the SupplierPanels we want to count
     *   }
     * })
    **/
    count<T extends SupplierPanelCountArgs>(
      args?: Subset<T, SupplierPanelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierPanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierPanelAggregateArgs>(args: Subset<T, SupplierPanelAggregateArgs>): Prisma.PrismaPromise<GetSupplierPanelAggregateType<T>>

    /**
     * Group by SupplierPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPanelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierPanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierPanelGroupByArgs['orderBy'] }
        : { orderBy?: SupplierPanelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierPanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierPanelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierPanel model
   */
  readonly fields: SupplierPanelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierPanel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierPanelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends SupplierPanel$productsArgs<ExtArgs> = {}>(args?: Subset<T, SupplierPanel$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findMany"> | Null>
    healthMetrics<T extends SupplierPanel$healthMetricsArgs<ExtArgs> = {}>(args?: Subset<T, SupplierPanel$healthMetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupplierPanel model
   */ 
  interface SupplierPanelFieldRefs {
    readonly id: FieldRef<"SupplierPanel", 'String'>
    readonly name: FieldRef<"SupplierPanel", 'String'>
    readonly apiUrl: FieldRef<"SupplierPanel", 'String'>
    readonly apiKey: FieldRef<"SupplierPanel", 'String'>
    readonly isActive: FieldRef<"SupplierPanel", 'Boolean'>
    readonly priority: FieldRef<"SupplierPanel", 'Int'>
    readonly healthStatus: FieldRef<"SupplierPanel", 'String'>
    readonly successRate: FieldRef<"SupplierPanel", 'Float'>
    readonly avgResponseTimeMs: FieldRef<"SupplierPanel", 'Int'>
    readonly lastHealthCheck: FieldRef<"SupplierPanel", 'DateTime'>
    readonly totalRequests: FieldRef<"SupplierPanel", 'Int'>
    readonly totalSuccesses: FieldRef<"SupplierPanel", 'Int'>
    readonly totalFailures: FieldRef<"SupplierPanel", 'Int'>
    readonly createdAt: FieldRef<"SupplierPanel", 'DateTime'>
    readonly updatedAt: FieldRef<"SupplierPanel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierPanel findUnique
   */
  export type SupplierPanelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPanel to fetch.
     */
    where: SupplierPanelWhereUniqueInput
  }

  /**
   * SupplierPanel findUniqueOrThrow
   */
  export type SupplierPanelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPanel to fetch.
     */
    where: SupplierPanelWhereUniqueInput
  }

  /**
   * SupplierPanel findFirst
   */
  export type SupplierPanelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPanel to fetch.
     */
    where?: SupplierPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPanels to fetch.
     */
    orderBy?: SupplierPanelOrderByWithRelationInput | SupplierPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPanels.
     */
    cursor?: SupplierPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPanels.
     */
    distinct?: SupplierPanelScalarFieldEnum | SupplierPanelScalarFieldEnum[]
  }

  /**
   * SupplierPanel findFirstOrThrow
   */
  export type SupplierPanelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPanel to fetch.
     */
    where?: SupplierPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPanels to fetch.
     */
    orderBy?: SupplierPanelOrderByWithRelationInput | SupplierPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPanels.
     */
    cursor?: SupplierPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPanels.
     */
    distinct?: SupplierPanelScalarFieldEnum | SupplierPanelScalarFieldEnum[]
  }

  /**
   * SupplierPanel findMany
   */
  export type SupplierPanelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPanels to fetch.
     */
    where?: SupplierPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPanels to fetch.
     */
    orderBy?: SupplierPanelOrderByWithRelationInput | SupplierPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierPanels.
     */
    cursor?: SupplierPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPanels.
     */
    skip?: number
    distinct?: SupplierPanelScalarFieldEnum | SupplierPanelScalarFieldEnum[]
  }

  /**
   * SupplierPanel create
   */
  export type SupplierPanelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierPanel.
     */
    data: XOR<SupplierPanelCreateInput, SupplierPanelUncheckedCreateInput>
  }

  /**
   * SupplierPanel createMany
   */
  export type SupplierPanelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierPanels.
     */
    data: SupplierPanelCreateManyInput | SupplierPanelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierPanel createManyAndReturn
   */
  export type SupplierPanelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierPanels.
     */
    data: SupplierPanelCreateManyInput | SupplierPanelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierPanel update
   */
  export type SupplierPanelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierPanel.
     */
    data: XOR<SupplierPanelUpdateInput, SupplierPanelUncheckedUpdateInput>
    /**
     * Choose, which SupplierPanel to update.
     */
    where: SupplierPanelWhereUniqueInput
  }

  /**
   * SupplierPanel updateMany
   */
  export type SupplierPanelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierPanels.
     */
    data: XOR<SupplierPanelUpdateManyMutationInput, SupplierPanelUncheckedUpdateManyInput>
    /**
     * Filter which SupplierPanels to update
     */
    where?: SupplierPanelWhereInput
  }

  /**
   * SupplierPanel upsert
   */
  export type SupplierPanelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierPanel to update in case it exists.
     */
    where: SupplierPanelWhereUniqueInput
    /**
     * In case the SupplierPanel found by the `where` argument doesn't exist, create a new SupplierPanel with this data.
     */
    create: XOR<SupplierPanelCreateInput, SupplierPanelUncheckedCreateInput>
    /**
     * In case the SupplierPanel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierPanelUpdateInput, SupplierPanelUncheckedUpdateInput>
  }

  /**
   * SupplierPanel delete
   */
  export type SupplierPanelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
    /**
     * Filter which SupplierPanel to delete.
     */
    where: SupplierPanelWhereUniqueInput
  }

  /**
   * SupplierPanel deleteMany
   */
  export type SupplierPanelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPanels to delete
     */
    where?: SupplierPanelWhereInput
  }

  /**
   * SupplierPanel.products
   */
  export type SupplierPanel$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    where?: SupplierProductWhereInput
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    cursor?: SupplierProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierProductScalarFieldEnum | SupplierProductScalarFieldEnum[]
  }

  /**
   * SupplierPanel.healthMetrics
   */
  export type SupplierPanel$healthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    where?: SupplierHealthMetricWhereInput
    orderBy?: SupplierHealthMetricOrderByWithRelationInput | SupplierHealthMetricOrderByWithRelationInput[]
    cursor?: SupplierHealthMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierHealthMetricScalarFieldEnum | SupplierHealthMetricScalarFieldEnum[]
  }

  /**
   * SupplierPanel without action
   */
  export type SupplierPanelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPanel
     */
    select?: SupplierPanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPanelInclude<ExtArgs> | null
  }


  /**
   * Model SupplierProduct
   */

  export type AggregateSupplierProduct = {
    _count: SupplierProductCountAggregateOutputType | null
    _avg: SupplierProductAvgAggregateOutputType | null
    _sum: SupplierProductSumAggregateOutputType | null
    _min: SupplierProductMinAggregateOutputType | null
    _max: SupplierProductMaxAggregateOutputType | null
  }

  export type SupplierProductAvgAggregateOutputType = {
    lastPrice: number | null
  }

  export type SupplierProductSumAggregateOutputType = {
    lastPrice: bigint | null
  }

  export type SupplierProductMinAggregateOutputType = {
    id: string | null
    panelId: string | null
    productCode: string | null
    isAvailable: boolean | null
    lastPrice: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierProductMaxAggregateOutputType = {
    id: string | null
    panelId: string | null
    productCode: string | null
    isAvailable: boolean | null
    lastPrice: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierProductCountAggregateOutputType = {
    id: number
    panelId: number
    productCode: number
    isAvailable: number
    lastPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierProductAvgAggregateInputType = {
    lastPrice?: true
  }

  export type SupplierProductSumAggregateInputType = {
    lastPrice?: true
  }

  export type SupplierProductMinAggregateInputType = {
    id?: true
    panelId?: true
    productCode?: true
    isAvailable?: true
    lastPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierProductMaxAggregateInputType = {
    id?: true
    panelId?: true
    productCode?: true
    isAvailable?: true
    lastPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierProductCountAggregateInputType = {
    id?: true
    panelId?: true
    productCode?: true
    isAvailable?: true
    lastPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierProduct to aggregate.
     */
    where?: SupplierProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierProducts to fetch.
     */
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierProducts
    **/
    _count?: true | SupplierProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierProductMaxAggregateInputType
  }

  export type GetSupplierProductAggregateType<T extends SupplierProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierProduct[P]>
      : GetScalarType<T[P], AggregateSupplierProduct[P]>
  }




  export type SupplierProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierProductWhereInput
    orderBy?: SupplierProductOrderByWithAggregationInput | SupplierProductOrderByWithAggregationInput[]
    by: SupplierProductScalarFieldEnum[] | SupplierProductScalarFieldEnum
    having?: SupplierProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierProductCountAggregateInputType | true
    _avg?: SupplierProductAvgAggregateInputType
    _sum?: SupplierProductSumAggregateInputType
    _min?: SupplierProductMinAggregateInputType
    _max?: SupplierProductMaxAggregateInputType
  }

  export type SupplierProductGroupByOutputType = {
    id: string
    panelId: string
    productCode: string
    isAvailable: boolean
    lastPrice: bigint | null
    createdAt: Date
    updatedAt: Date
    _count: SupplierProductCountAggregateOutputType | null
    _avg: SupplierProductAvgAggregateOutputType | null
    _sum: SupplierProductSumAggregateOutputType | null
    _min: SupplierProductMinAggregateOutputType | null
    _max: SupplierProductMaxAggregateOutputType | null
  }

  type GetSupplierProductGroupByPayload<T extends SupplierProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierProductGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierProductGroupByOutputType[P]>
        }
      >
    >


  export type SupplierProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    productCode?: boolean
    isAvailable?: boolean
    lastPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    panel?: boolean | SupplierPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierProduct"]>

  export type SupplierProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    productCode?: boolean
    isAvailable?: boolean
    lastPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    panel?: boolean | SupplierPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierProduct"]>

  export type SupplierProductSelectScalar = {
    id?: boolean
    panelId?: boolean
    productCode?: boolean
    isAvailable?: boolean
    lastPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | SupplierPanelDefaultArgs<ExtArgs>
  }
  export type SupplierProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | SupplierPanelDefaultArgs<ExtArgs>
  }

  export type $SupplierProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierProduct"
    objects: {
      panel: Prisma.$SupplierPanelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      panelId: string
      productCode: string
      isAvailable: boolean
      lastPrice: bigint | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplierProduct"]>
    composites: {}
  }

  type SupplierProductGetPayload<S extends boolean | null | undefined | SupplierProductDefaultArgs> = $Result.GetResult<Prisma.$SupplierProductPayload, S>

  type SupplierProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierProductCountAggregateInputType | true
    }

  export interface SupplierProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierProduct'], meta: { name: 'SupplierProduct' } }
    /**
     * Find zero or one SupplierProduct that matches the filter.
     * @param {SupplierProductFindUniqueArgs} args - Arguments to find a SupplierProduct
     * @example
     * // Get one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierProductFindUniqueArgs>(args: SelectSubset<T, SupplierProductFindUniqueArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierProductFindUniqueOrThrowArgs} args - Arguments to find a SupplierProduct
     * @example
     * // Get one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductFindFirstArgs} args - Arguments to find a SupplierProduct
     * @example
     * // Get one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierProductFindFirstArgs>(args?: SelectSubset<T, SupplierProductFindFirstArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductFindFirstOrThrowArgs} args - Arguments to find a SupplierProduct
     * @example
     * // Get one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierProducts
     * const supplierProducts = await prisma.supplierProduct.findMany()
     * 
     * // Get first 10 SupplierProducts
     * const supplierProducts = await prisma.supplierProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierProductWithIdOnly = await prisma.supplierProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierProductFindManyArgs>(args?: SelectSubset<T, SupplierProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierProduct.
     * @param {SupplierProductCreateArgs} args - Arguments to create a SupplierProduct.
     * @example
     * // Create one SupplierProduct
     * const SupplierProduct = await prisma.supplierProduct.create({
     *   data: {
     *     // ... data to create a SupplierProduct
     *   }
     * })
     * 
     */
    create<T extends SupplierProductCreateArgs>(args: SelectSubset<T, SupplierProductCreateArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierProducts.
     * @param {SupplierProductCreateManyArgs} args - Arguments to create many SupplierProducts.
     * @example
     * // Create many SupplierProducts
     * const supplierProduct = await prisma.supplierProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierProductCreateManyArgs>(args?: SelectSubset<T, SupplierProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierProducts and returns the data saved in the database.
     * @param {SupplierProductCreateManyAndReturnArgs} args - Arguments to create many SupplierProducts.
     * @example
     * // Create many SupplierProducts
     * const supplierProduct = await prisma.supplierProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierProducts and only return the `id`
     * const supplierProductWithIdOnly = await prisma.supplierProduct.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierProductCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierProduct.
     * @param {SupplierProductDeleteArgs} args - Arguments to delete one SupplierProduct.
     * @example
     * // Delete one SupplierProduct
     * const SupplierProduct = await prisma.supplierProduct.delete({
     *   where: {
     *     // ... filter to delete one SupplierProduct
     *   }
     * })
     * 
     */
    delete<T extends SupplierProductDeleteArgs>(args: SelectSubset<T, SupplierProductDeleteArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierProduct.
     * @param {SupplierProductUpdateArgs} args - Arguments to update one SupplierProduct.
     * @example
     * // Update one SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierProductUpdateArgs>(args: SelectSubset<T, SupplierProductUpdateArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierProducts.
     * @param {SupplierProductDeleteManyArgs} args - Arguments to filter SupplierProducts to delete.
     * @example
     * // Delete a few SupplierProducts
     * const { count } = await prisma.supplierProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierProductDeleteManyArgs>(args?: SelectSubset<T, SupplierProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierProducts
     * const supplierProduct = await prisma.supplierProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierProductUpdateManyArgs>(args: SelectSubset<T, SupplierProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierProduct.
     * @param {SupplierProductUpsertArgs} args - Arguments to update or create a SupplierProduct.
     * @example
     * // Update or create a SupplierProduct
     * const supplierProduct = await prisma.supplierProduct.upsert({
     *   create: {
     *     // ... data to create a SupplierProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierProduct we want to update
     *   }
     * })
     */
    upsert<T extends SupplierProductUpsertArgs>(args: SelectSubset<T, SupplierProductUpsertArgs<ExtArgs>>): Prisma__SupplierProductClient<$Result.GetResult<Prisma.$SupplierProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductCountArgs} args - Arguments to filter SupplierProducts to count.
     * @example
     * // Count the number of SupplierProducts
     * const count = await prisma.supplierProduct.count({
     *   where: {
     *     // ... the filter for the SupplierProducts we want to count
     *   }
     * })
    **/
    count<T extends SupplierProductCountArgs>(
      args?: Subset<T, SupplierProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierProductAggregateArgs>(args: Subset<T, SupplierProductAggregateArgs>): Prisma.PrismaPromise<GetSupplierProductAggregateType<T>>

    /**
     * Group by SupplierProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierProductGroupByArgs['orderBy'] }
        : { orderBy?: SupplierProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierProduct model
   */
  readonly fields: SupplierProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panel<T extends SupplierPanelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierPanelDefaultArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupplierProduct model
   */ 
  interface SupplierProductFieldRefs {
    readonly id: FieldRef<"SupplierProduct", 'String'>
    readonly panelId: FieldRef<"SupplierProduct", 'String'>
    readonly productCode: FieldRef<"SupplierProduct", 'String'>
    readonly isAvailable: FieldRef<"SupplierProduct", 'Boolean'>
    readonly lastPrice: FieldRef<"SupplierProduct", 'BigInt'>
    readonly createdAt: FieldRef<"SupplierProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"SupplierProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierProduct findUnique
   */
  export type SupplierProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProduct to fetch.
     */
    where: SupplierProductWhereUniqueInput
  }

  /**
   * SupplierProduct findUniqueOrThrow
   */
  export type SupplierProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProduct to fetch.
     */
    where: SupplierProductWhereUniqueInput
  }

  /**
   * SupplierProduct findFirst
   */
  export type SupplierProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProduct to fetch.
     */
    where?: SupplierProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierProducts to fetch.
     */
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierProducts.
     */
    cursor?: SupplierProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierProducts.
     */
    distinct?: SupplierProductScalarFieldEnum | SupplierProductScalarFieldEnum[]
  }

  /**
   * SupplierProduct findFirstOrThrow
   */
  export type SupplierProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProduct to fetch.
     */
    where?: SupplierProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierProducts to fetch.
     */
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierProducts.
     */
    cursor?: SupplierProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierProducts.
     */
    distinct?: SupplierProductScalarFieldEnum | SupplierProductScalarFieldEnum[]
  }

  /**
   * SupplierProduct findMany
   */
  export type SupplierProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter, which SupplierProducts to fetch.
     */
    where?: SupplierProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierProducts to fetch.
     */
    orderBy?: SupplierProductOrderByWithRelationInput | SupplierProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierProducts.
     */
    cursor?: SupplierProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierProducts.
     */
    skip?: number
    distinct?: SupplierProductScalarFieldEnum | SupplierProductScalarFieldEnum[]
  }

  /**
   * SupplierProduct create
   */
  export type SupplierProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierProduct.
     */
    data: XOR<SupplierProductCreateInput, SupplierProductUncheckedCreateInput>
  }

  /**
   * SupplierProduct createMany
   */
  export type SupplierProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierProducts.
     */
    data: SupplierProductCreateManyInput | SupplierProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierProduct createManyAndReturn
   */
  export type SupplierProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierProducts.
     */
    data: SupplierProductCreateManyInput | SupplierProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierProduct update
   */
  export type SupplierProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierProduct.
     */
    data: XOR<SupplierProductUpdateInput, SupplierProductUncheckedUpdateInput>
    /**
     * Choose, which SupplierProduct to update.
     */
    where: SupplierProductWhereUniqueInput
  }

  /**
   * SupplierProduct updateMany
   */
  export type SupplierProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierProducts.
     */
    data: XOR<SupplierProductUpdateManyMutationInput, SupplierProductUncheckedUpdateManyInput>
    /**
     * Filter which SupplierProducts to update
     */
    where?: SupplierProductWhereInput
  }

  /**
   * SupplierProduct upsert
   */
  export type SupplierProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierProduct to update in case it exists.
     */
    where: SupplierProductWhereUniqueInput
    /**
     * In case the SupplierProduct found by the `where` argument doesn't exist, create a new SupplierProduct with this data.
     */
    create: XOR<SupplierProductCreateInput, SupplierProductUncheckedCreateInput>
    /**
     * In case the SupplierProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierProductUpdateInput, SupplierProductUncheckedUpdateInput>
  }

  /**
   * SupplierProduct delete
   */
  export type SupplierProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
    /**
     * Filter which SupplierProduct to delete.
     */
    where: SupplierProductWhereUniqueInput
  }

  /**
   * SupplierProduct deleteMany
   */
  export type SupplierProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierProducts to delete
     */
    where?: SupplierProductWhereInput
  }

  /**
   * SupplierProduct without action
   */
  export type SupplierProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierProduct
     */
    select?: SupplierProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierProductInclude<ExtArgs> | null
  }


  /**
   * Model SupplierHealthMetric
   */

  export type AggregateSupplierHealthMetric = {
    _count: SupplierHealthMetricCountAggregateOutputType | null
    _avg: SupplierHealthMetricAvgAggregateOutputType | null
    _sum: SupplierHealthMetricSumAggregateOutputType | null
    _min: SupplierHealthMetricMinAggregateOutputType | null
    _max: SupplierHealthMetricMaxAggregateOutputType | null
  }

  export type SupplierHealthMetricAvgAggregateOutputType = {
    responseTimeMs: number | null
  }

  export type SupplierHealthMetricSumAggregateOutputType = {
    responseTimeMs: number | null
  }

  export type SupplierHealthMetricMinAggregateOutputType = {
    id: string | null
    panelId: string | null
    responseTimeMs: number | null
    isHealthy: boolean | null
    createdAt: Date | null
  }

  export type SupplierHealthMetricMaxAggregateOutputType = {
    id: string | null
    panelId: string | null
    responseTimeMs: number | null
    isHealthy: boolean | null
    createdAt: Date | null
  }

  export type SupplierHealthMetricCountAggregateOutputType = {
    id: number
    panelId: number
    responseTimeMs: number
    isHealthy: number
    createdAt: number
    _all: number
  }


  export type SupplierHealthMetricAvgAggregateInputType = {
    responseTimeMs?: true
  }

  export type SupplierHealthMetricSumAggregateInputType = {
    responseTimeMs?: true
  }

  export type SupplierHealthMetricMinAggregateInputType = {
    id?: true
    panelId?: true
    responseTimeMs?: true
    isHealthy?: true
    createdAt?: true
  }

  export type SupplierHealthMetricMaxAggregateInputType = {
    id?: true
    panelId?: true
    responseTimeMs?: true
    isHealthy?: true
    createdAt?: true
  }

  export type SupplierHealthMetricCountAggregateInputType = {
    id?: true
    panelId?: true
    responseTimeMs?: true
    isHealthy?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierHealthMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierHealthMetric to aggregate.
     */
    where?: SupplierHealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierHealthMetrics to fetch.
     */
    orderBy?: SupplierHealthMetricOrderByWithRelationInput | SupplierHealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierHealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierHealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierHealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierHealthMetrics
    **/
    _count?: true | SupplierHealthMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierHealthMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierHealthMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierHealthMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierHealthMetricMaxAggregateInputType
  }

  export type GetSupplierHealthMetricAggregateType<T extends SupplierHealthMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierHealthMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierHealthMetric[P]>
      : GetScalarType<T[P], AggregateSupplierHealthMetric[P]>
  }




  export type SupplierHealthMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierHealthMetricWhereInput
    orderBy?: SupplierHealthMetricOrderByWithAggregationInput | SupplierHealthMetricOrderByWithAggregationInput[]
    by: SupplierHealthMetricScalarFieldEnum[] | SupplierHealthMetricScalarFieldEnum
    having?: SupplierHealthMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierHealthMetricCountAggregateInputType | true
    _avg?: SupplierHealthMetricAvgAggregateInputType
    _sum?: SupplierHealthMetricSumAggregateInputType
    _min?: SupplierHealthMetricMinAggregateInputType
    _max?: SupplierHealthMetricMaxAggregateInputType
  }

  export type SupplierHealthMetricGroupByOutputType = {
    id: string
    panelId: string
    responseTimeMs: number
    isHealthy: boolean
    createdAt: Date
    _count: SupplierHealthMetricCountAggregateOutputType | null
    _avg: SupplierHealthMetricAvgAggregateOutputType | null
    _sum: SupplierHealthMetricSumAggregateOutputType | null
    _min: SupplierHealthMetricMinAggregateOutputType | null
    _max: SupplierHealthMetricMaxAggregateOutputType | null
  }

  type GetSupplierHealthMetricGroupByPayload<T extends SupplierHealthMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierHealthMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierHealthMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierHealthMetricGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierHealthMetricGroupByOutputType[P]>
        }
      >
    >


  export type SupplierHealthMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    responseTimeMs?: boolean
    isHealthy?: boolean
    createdAt?: boolean
    panel?: boolean | SupplierPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierHealthMetric"]>

  export type SupplierHealthMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    responseTimeMs?: boolean
    isHealthy?: boolean
    createdAt?: boolean
    panel?: boolean | SupplierPanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierHealthMetric"]>

  export type SupplierHealthMetricSelectScalar = {
    id?: boolean
    panelId?: boolean
    responseTimeMs?: boolean
    isHealthy?: boolean
    createdAt?: boolean
  }

  export type SupplierHealthMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | SupplierPanelDefaultArgs<ExtArgs>
  }
  export type SupplierHealthMetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | SupplierPanelDefaultArgs<ExtArgs>
  }

  export type $SupplierHealthMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierHealthMetric"
    objects: {
      panel: Prisma.$SupplierPanelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      panelId: string
      responseTimeMs: number
      isHealthy: boolean
      createdAt: Date
    }, ExtArgs["result"]["supplierHealthMetric"]>
    composites: {}
  }

  type SupplierHealthMetricGetPayload<S extends boolean | null | undefined | SupplierHealthMetricDefaultArgs> = $Result.GetResult<Prisma.$SupplierHealthMetricPayload, S>

  type SupplierHealthMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierHealthMetricFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierHealthMetricCountAggregateInputType | true
    }

  export interface SupplierHealthMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierHealthMetric'], meta: { name: 'SupplierHealthMetric' } }
    /**
     * Find zero or one SupplierHealthMetric that matches the filter.
     * @param {SupplierHealthMetricFindUniqueArgs} args - Arguments to find a SupplierHealthMetric
     * @example
     * // Get one SupplierHealthMetric
     * const supplierHealthMetric = await prisma.supplierHealthMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierHealthMetricFindUniqueArgs>(args: SelectSubset<T, SupplierHealthMetricFindUniqueArgs<ExtArgs>>): Prisma__SupplierHealthMetricClient<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierHealthMetric that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierHealthMetricFindUniqueOrThrowArgs} args - Arguments to find a SupplierHealthMetric
     * @example
     * // Get one SupplierHealthMetric
     * const supplierHealthMetric = await prisma.supplierHealthMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierHealthMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierHealthMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierHealthMetricClient<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierHealthMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierHealthMetricFindFirstArgs} args - Arguments to find a SupplierHealthMetric
     * @example
     * // Get one SupplierHealthMetric
     * const supplierHealthMetric = await prisma.supplierHealthMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierHealthMetricFindFirstArgs>(args?: SelectSubset<T, SupplierHealthMetricFindFirstArgs<ExtArgs>>): Prisma__SupplierHealthMetricClient<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierHealthMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierHealthMetricFindFirstOrThrowArgs} args - Arguments to find a SupplierHealthMetric
     * @example
     * // Get one SupplierHealthMetric
     * const supplierHealthMetric = await prisma.supplierHealthMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierHealthMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierHealthMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierHealthMetricClient<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierHealthMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierHealthMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierHealthMetrics
     * const supplierHealthMetrics = await prisma.supplierHealthMetric.findMany()
     * 
     * // Get first 10 SupplierHealthMetrics
     * const supplierHealthMetrics = await prisma.supplierHealthMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierHealthMetricWithIdOnly = await prisma.supplierHealthMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierHealthMetricFindManyArgs>(args?: SelectSubset<T, SupplierHealthMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierHealthMetric.
     * @param {SupplierHealthMetricCreateArgs} args - Arguments to create a SupplierHealthMetric.
     * @example
     * // Create one SupplierHealthMetric
     * const SupplierHealthMetric = await prisma.supplierHealthMetric.create({
     *   data: {
     *     // ... data to create a SupplierHealthMetric
     *   }
     * })
     * 
     */
    create<T extends SupplierHealthMetricCreateArgs>(args: SelectSubset<T, SupplierHealthMetricCreateArgs<ExtArgs>>): Prisma__SupplierHealthMetricClient<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierHealthMetrics.
     * @param {SupplierHealthMetricCreateManyArgs} args - Arguments to create many SupplierHealthMetrics.
     * @example
     * // Create many SupplierHealthMetrics
     * const supplierHealthMetric = await prisma.supplierHealthMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierHealthMetricCreateManyArgs>(args?: SelectSubset<T, SupplierHealthMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierHealthMetrics and returns the data saved in the database.
     * @param {SupplierHealthMetricCreateManyAndReturnArgs} args - Arguments to create many SupplierHealthMetrics.
     * @example
     * // Create many SupplierHealthMetrics
     * const supplierHealthMetric = await prisma.supplierHealthMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierHealthMetrics and only return the `id`
     * const supplierHealthMetricWithIdOnly = await prisma.supplierHealthMetric.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierHealthMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierHealthMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierHealthMetric.
     * @param {SupplierHealthMetricDeleteArgs} args - Arguments to delete one SupplierHealthMetric.
     * @example
     * // Delete one SupplierHealthMetric
     * const SupplierHealthMetric = await prisma.supplierHealthMetric.delete({
     *   where: {
     *     // ... filter to delete one SupplierHealthMetric
     *   }
     * })
     * 
     */
    delete<T extends SupplierHealthMetricDeleteArgs>(args: SelectSubset<T, SupplierHealthMetricDeleteArgs<ExtArgs>>): Prisma__SupplierHealthMetricClient<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierHealthMetric.
     * @param {SupplierHealthMetricUpdateArgs} args - Arguments to update one SupplierHealthMetric.
     * @example
     * // Update one SupplierHealthMetric
     * const supplierHealthMetric = await prisma.supplierHealthMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierHealthMetricUpdateArgs>(args: SelectSubset<T, SupplierHealthMetricUpdateArgs<ExtArgs>>): Prisma__SupplierHealthMetricClient<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierHealthMetrics.
     * @param {SupplierHealthMetricDeleteManyArgs} args - Arguments to filter SupplierHealthMetrics to delete.
     * @example
     * // Delete a few SupplierHealthMetrics
     * const { count } = await prisma.supplierHealthMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierHealthMetricDeleteManyArgs>(args?: SelectSubset<T, SupplierHealthMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierHealthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierHealthMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierHealthMetrics
     * const supplierHealthMetric = await prisma.supplierHealthMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierHealthMetricUpdateManyArgs>(args: SelectSubset<T, SupplierHealthMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierHealthMetric.
     * @param {SupplierHealthMetricUpsertArgs} args - Arguments to update or create a SupplierHealthMetric.
     * @example
     * // Update or create a SupplierHealthMetric
     * const supplierHealthMetric = await prisma.supplierHealthMetric.upsert({
     *   create: {
     *     // ... data to create a SupplierHealthMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierHealthMetric we want to update
     *   }
     * })
     */
    upsert<T extends SupplierHealthMetricUpsertArgs>(args: SelectSubset<T, SupplierHealthMetricUpsertArgs<ExtArgs>>): Prisma__SupplierHealthMetricClient<$Result.GetResult<Prisma.$SupplierHealthMetricPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierHealthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierHealthMetricCountArgs} args - Arguments to filter SupplierHealthMetrics to count.
     * @example
     * // Count the number of SupplierHealthMetrics
     * const count = await prisma.supplierHealthMetric.count({
     *   where: {
     *     // ... the filter for the SupplierHealthMetrics we want to count
     *   }
     * })
    **/
    count<T extends SupplierHealthMetricCountArgs>(
      args?: Subset<T, SupplierHealthMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierHealthMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierHealthMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierHealthMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierHealthMetricAggregateArgs>(args: Subset<T, SupplierHealthMetricAggregateArgs>): Prisma.PrismaPromise<GetSupplierHealthMetricAggregateType<T>>

    /**
     * Group by SupplierHealthMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierHealthMetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierHealthMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierHealthMetricGroupByArgs['orderBy'] }
        : { orderBy?: SupplierHealthMetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierHealthMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierHealthMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierHealthMetric model
   */
  readonly fields: SupplierHealthMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierHealthMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierHealthMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panel<T extends SupplierPanelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierPanelDefaultArgs<ExtArgs>>): Prisma__SupplierPanelClient<$Result.GetResult<Prisma.$SupplierPanelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupplierHealthMetric model
   */ 
  interface SupplierHealthMetricFieldRefs {
    readonly id: FieldRef<"SupplierHealthMetric", 'String'>
    readonly panelId: FieldRef<"SupplierHealthMetric", 'String'>
    readonly responseTimeMs: FieldRef<"SupplierHealthMetric", 'Int'>
    readonly isHealthy: FieldRef<"SupplierHealthMetric", 'Boolean'>
    readonly createdAt: FieldRef<"SupplierHealthMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierHealthMetric findUnique
   */
  export type SupplierHealthMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which SupplierHealthMetric to fetch.
     */
    where: SupplierHealthMetricWhereUniqueInput
  }

  /**
   * SupplierHealthMetric findUniqueOrThrow
   */
  export type SupplierHealthMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which SupplierHealthMetric to fetch.
     */
    where: SupplierHealthMetricWhereUniqueInput
  }

  /**
   * SupplierHealthMetric findFirst
   */
  export type SupplierHealthMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which SupplierHealthMetric to fetch.
     */
    where?: SupplierHealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierHealthMetrics to fetch.
     */
    orderBy?: SupplierHealthMetricOrderByWithRelationInput | SupplierHealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierHealthMetrics.
     */
    cursor?: SupplierHealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierHealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierHealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierHealthMetrics.
     */
    distinct?: SupplierHealthMetricScalarFieldEnum | SupplierHealthMetricScalarFieldEnum[]
  }

  /**
   * SupplierHealthMetric findFirstOrThrow
   */
  export type SupplierHealthMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which SupplierHealthMetric to fetch.
     */
    where?: SupplierHealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierHealthMetrics to fetch.
     */
    orderBy?: SupplierHealthMetricOrderByWithRelationInput | SupplierHealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierHealthMetrics.
     */
    cursor?: SupplierHealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierHealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierHealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierHealthMetrics.
     */
    distinct?: SupplierHealthMetricScalarFieldEnum | SupplierHealthMetricScalarFieldEnum[]
  }

  /**
   * SupplierHealthMetric findMany
   */
  export type SupplierHealthMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which SupplierHealthMetrics to fetch.
     */
    where?: SupplierHealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierHealthMetrics to fetch.
     */
    orderBy?: SupplierHealthMetricOrderByWithRelationInput | SupplierHealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierHealthMetrics.
     */
    cursor?: SupplierHealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierHealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierHealthMetrics.
     */
    skip?: number
    distinct?: SupplierHealthMetricScalarFieldEnum | SupplierHealthMetricScalarFieldEnum[]
  }

  /**
   * SupplierHealthMetric create
   */
  export type SupplierHealthMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierHealthMetric.
     */
    data: XOR<SupplierHealthMetricCreateInput, SupplierHealthMetricUncheckedCreateInput>
  }

  /**
   * SupplierHealthMetric createMany
   */
  export type SupplierHealthMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierHealthMetrics.
     */
    data: SupplierHealthMetricCreateManyInput | SupplierHealthMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierHealthMetric createManyAndReturn
   */
  export type SupplierHealthMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierHealthMetrics.
     */
    data: SupplierHealthMetricCreateManyInput | SupplierHealthMetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierHealthMetric update
   */
  export type SupplierHealthMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierHealthMetric.
     */
    data: XOR<SupplierHealthMetricUpdateInput, SupplierHealthMetricUncheckedUpdateInput>
    /**
     * Choose, which SupplierHealthMetric to update.
     */
    where: SupplierHealthMetricWhereUniqueInput
  }

  /**
   * SupplierHealthMetric updateMany
   */
  export type SupplierHealthMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierHealthMetrics.
     */
    data: XOR<SupplierHealthMetricUpdateManyMutationInput, SupplierHealthMetricUncheckedUpdateManyInput>
    /**
     * Filter which SupplierHealthMetrics to update
     */
    where?: SupplierHealthMetricWhereInput
  }

  /**
   * SupplierHealthMetric upsert
   */
  export type SupplierHealthMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierHealthMetric to update in case it exists.
     */
    where: SupplierHealthMetricWhereUniqueInput
    /**
     * In case the SupplierHealthMetric found by the `where` argument doesn't exist, create a new SupplierHealthMetric with this data.
     */
    create: XOR<SupplierHealthMetricCreateInput, SupplierHealthMetricUncheckedCreateInput>
    /**
     * In case the SupplierHealthMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierHealthMetricUpdateInput, SupplierHealthMetricUncheckedUpdateInput>
  }

  /**
   * SupplierHealthMetric delete
   */
  export type SupplierHealthMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
    /**
     * Filter which SupplierHealthMetric to delete.
     */
    where: SupplierHealthMetricWhereUniqueInput
  }

  /**
   * SupplierHealthMetric deleteMany
   */
  export type SupplierHealthMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierHealthMetrics to delete
     */
    where?: SupplierHealthMetricWhereInput
  }

  /**
   * SupplierHealthMetric without action
   */
  export type SupplierHealthMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierHealthMetric
     */
    select?: SupplierHealthMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierHealthMetricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ResellerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    name: 'name',
    tier: 'tier',
    status: 'status',
    balance: 'balance',
    monthlyTurnover: 'monthlyTurnover',
    totalTurnoverAllTime: 'totalTurnoverAllTime',
    discordUserId: 'discordUserId',
    telegramUserId: 'telegramUserId',
    whatsappPhoneNumber: 'whatsappPhoneNumber',
    referrerId: 'referrerId',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResellerScalarFieldEnum = (typeof ResellerScalarFieldEnum)[keyof typeof ResellerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    code: 'code',
    gameName: 'gameName',
    displayName: 'displayName',
    description: 'description',
    costPrice: 'costPrice',
    baseMarkup: 'baseMarkup',
    active: 'active',
    maxStock: 'maxStock',
    currentStock: 'currentStock',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const TierPriceScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    tier: 'tier',
    markup: 'markup',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TierPriceScalarFieldEnum = (typeof TierPriceScalarFieldEnum)[keyof typeof TierPriceScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    resellerId: 'resellerId',
    amount: 'amount',
    paymentChannel: 'paymentChannel',
    status: 'status',
    externalPaymentId: 'externalPaymentId',
    paymentUrl: 'paymentUrl',
    qrCodeUrl: 'qrCodeUrl',
    virtualAccountNumber: 'virtualAccountNumber',
    bankName: 'bankName',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    paidAt: 'paidAt',
    updatedAt: 'updatedAt'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    resellerId: 'resellerId',
    productId: 'productId',
    targetGameId: 'targetGameId',
    quantity: 'quantity',
    costPrice: 'costPrice',
    resellerPrice: 'resellerPrice',
    ppnAmount: 'ppnAmount',
    marginAmount: 'marginAmount',
    profit: 'profit',
    status: 'status',
    failureReason: 'failureReason',
    externalRef: 'externalRef',
    supplierOrderData: 'supplierOrderData',
    idempotencyKey: 'idempotencyKey',
    metadata: 'metadata',
    createdAt: 'createdAt',
    processedAt: 'processedAt',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    amount: 'amount',
    balance_before: 'balance_before',
    balance_after: 'balance_after',
    depositId: 'depositId',
    orderId: 'orderId',
    notes: 'notes',
    adjustedBy: 'adjustedBy',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    resellerId: 'resellerId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    oldValue: 'oldValue',
    newValue: 'newValue',
    performedBy: 'performedBy',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const DailySummaryScalarFieldEnum: {
    id: 'id',
    date: 'date',
    totalOrders: 'totalOrders',
    successfulOrders: 'successfulOrders',
    failedOrders: 'failedOrders',
    totalTurnover: 'totalTurnover',
    totalCost: 'totalCost',
    totalProfit: 'totalProfit',
    totalDeposits: 'totalDeposits',
    depositAmount: 'depositAmount',
    newResellers: 'newResellers',
    createdAt: 'createdAt'
  };

  export type DailySummaryScalarFieldEnum = (typeof DailySummaryScalarFieldEnum)[keyof typeof DailySummaryScalarFieldEnum]


  export const MonthlySummaryScalarFieldEnum: {
    id: 'id',
    year: 'year',
    month: 'month',
    totalOrders: 'totalOrders',
    totalTurnover: 'totalTurnover',
    totalProfit: 'totalProfit',
    averageOrderValue: 'averageOrderValue',
    totalDeposits: 'totalDeposits',
    totalDepositAmount: 'totalDepositAmount',
    taxableIncome: 'taxableIncome',
    estimatedTax: 'estimatedTax',
    createdAt: 'createdAt'
  };

  export type MonthlySummaryScalarFieldEnum = (typeof MonthlySummaryScalarFieldEnum)[keyof typeof MonthlySummaryScalarFieldEnum]


  export const WebhookLogScalarFieldEnum: {
    id: 'id',
    source: 'source',
    event: 'event',
    payload: 'payload',
    ipAddress: 'ipAddress',
    isValid: 'isValid',
    error: 'error',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
  };

  export type WebhookLogScalarFieldEnum = (typeof WebhookLogScalarFieldEnum)[keyof typeof WebhookLogScalarFieldEnum]


  export const ProductPricingScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    denomination: 'denomination',
    supplierPrice: 'supplierPrice',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductPricingScalarFieldEnum = (typeof ProductPricingScalarFieldEnum)[keyof typeof ProductPricingScalarFieldEnum]


  export const SupplierPanelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiUrl: 'apiUrl',
    apiKey: 'apiKey',
    isActive: 'isActive',
    priority: 'priority',
    healthStatus: 'healthStatus',
    successRate: 'successRate',
    avgResponseTimeMs: 'avgResponseTimeMs',
    lastHealthCheck: 'lastHealthCheck',
    totalRequests: 'totalRequests',
    totalSuccesses: 'totalSuccesses',
    totalFailures: 'totalFailures',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierPanelScalarFieldEnum = (typeof SupplierPanelScalarFieldEnum)[keyof typeof SupplierPanelScalarFieldEnum]


  export const SupplierProductScalarFieldEnum: {
    id: 'id',
    panelId: 'panelId',
    productCode: 'productCode',
    isAvailable: 'isAvailable',
    lastPrice: 'lastPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierProductScalarFieldEnum = (typeof SupplierProductScalarFieldEnum)[keyof typeof SupplierProductScalarFieldEnum]


  export const SupplierHealthMetricScalarFieldEnum: {
    id: 'id',
    panelId: 'panelId',
    responseTimeMs: 'responseTimeMs',
    isHealthy: 'isHealthy',
    createdAt: 'createdAt'
  };

  export type SupplierHealthMetricScalarFieldEnum = (typeof SupplierHealthMetricScalarFieldEnum)[keyof typeof SupplierHealthMetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ResellerTier'
   */
  export type EnumResellerTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResellerTier'>
    


  /**
   * Reference to a field of type 'ResellerTier[]'
   */
  export type ListEnumResellerTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResellerTier[]'>
    


  /**
   * Reference to a field of type 'ResellerStatus'
   */
  export type EnumResellerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResellerStatus'>
    


  /**
   * Reference to a field of type 'ResellerStatus[]'
   */
  export type ListEnumResellerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResellerStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PaymentChannel'
   */
  export type EnumPaymentChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentChannel'>
    


  /**
   * Reference to a field of type 'PaymentChannel[]'
   */
  export type ListEnumPaymentChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentChannel[]'>
    


  /**
   * Reference to a field of type 'DepositStatus'
   */
  export type EnumDepositStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositStatus'>
    


  /**
   * Reference to a field of type 'DepositStatus[]'
   */
  export type ListEnumDepositStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ResellerWhereInput = {
    AND?: ResellerWhereInput | ResellerWhereInput[]
    OR?: ResellerWhereInput[]
    NOT?: ResellerWhereInput | ResellerWhereInput[]
    id?: StringFilter<"Reseller"> | string
    email?: StringNullableFilter<"Reseller"> | string | null
    username?: StringFilter<"Reseller"> | string
    name?: StringFilter<"Reseller"> | string
    tier?: EnumResellerTierFilter<"Reseller"> | $Enums.ResellerTier
    status?: EnumResellerStatusFilter<"Reseller"> | $Enums.ResellerStatus
    balance?: BigIntFilter<"Reseller"> | bigint | number
    monthlyTurnover?: BigIntFilter<"Reseller"> | bigint | number
    totalTurnoverAllTime?: BigIntFilter<"Reseller"> | bigint | number
    discordUserId?: StringNullableFilter<"Reseller"> | string | null
    telegramUserId?: StringNullableFilter<"Reseller"> | string | null
    whatsappPhoneNumber?: StringNullableFilter<"Reseller"> | string | null
    referrerId?: StringNullableFilter<"Reseller"> | string | null
    isVerified?: BoolFilter<"Reseller"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Reseller"> | Date | string | null
    metadata?: JsonNullableFilter<"Reseller">
    createdAt?: DateTimeFilter<"Reseller"> | Date | string
    updatedAt?: DateTimeFilter<"Reseller"> | Date | string
    referrer?: XOR<ResellerNullableRelationFilter, ResellerWhereInput> | null
    referrals?: ResellerListRelationFilter
    orders?: OrderListRelationFilter
    deposits?: DepositListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type ResellerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    monthlyTurnover?: SortOrder
    totalTurnoverAllTime?: SortOrder
    discordUserId?: SortOrderInput | SortOrder
    telegramUserId?: SortOrderInput | SortOrder
    whatsappPhoneNumber?: SortOrderInput | SortOrder
    referrerId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referrer?: ResellerOrderByWithRelationInput
    referrals?: ResellerOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    deposits?: DepositOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type ResellerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    discordUserId?: string
    telegramUserId?: string
    whatsappPhoneNumber?: string
    AND?: ResellerWhereInput | ResellerWhereInput[]
    OR?: ResellerWhereInput[]
    NOT?: ResellerWhereInput | ResellerWhereInput[]
    name?: StringFilter<"Reseller"> | string
    tier?: EnumResellerTierFilter<"Reseller"> | $Enums.ResellerTier
    status?: EnumResellerStatusFilter<"Reseller"> | $Enums.ResellerStatus
    balance?: BigIntFilter<"Reseller"> | bigint | number
    monthlyTurnover?: BigIntFilter<"Reseller"> | bigint | number
    totalTurnoverAllTime?: BigIntFilter<"Reseller"> | bigint | number
    referrerId?: StringNullableFilter<"Reseller"> | string | null
    isVerified?: BoolFilter<"Reseller"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Reseller"> | Date | string | null
    metadata?: JsonNullableFilter<"Reseller">
    createdAt?: DateTimeFilter<"Reseller"> | Date | string
    updatedAt?: DateTimeFilter<"Reseller"> | Date | string
    referrer?: XOR<ResellerNullableRelationFilter, ResellerWhereInput> | null
    referrals?: ResellerListRelationFilter
    orders?: OrderListRelationFilter
    deposits?: DepositListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email" | "username" | "discordUserId" | "telegramUserId" | "whatsappPhoneNumber">

  export type ResellerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    monthlyTurnover?: SortOrder
    totalTurnoverAllTime?: SortOrder
    discordUserId?: SortOrderInput | SortOrder
    telegramUserId?: SortOrderInput | SortOrder
    whatsappPhoneNumber?: SortOrderInput | SortOrder
    referrerId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResellerCountOrderByAggregateInput
    _avg?: ResellerAvgOrderByAggregateInput
    _max?: ResellerMaxOrderByAggregateInput
    _min?: ResellerMinOrderByAggregateInput
    _sum?: ResellerSumOrderByAggregateInput
  }

  export type ResellerScalarWhereWithAggregatesInput = {
    AND?: ResellerScalarWhereWithAggregatesInput | ResellerScalarWhereWithAggregatesInput[]
    OR?: ResellerScalarWhereWithAggregatesInput[]
    NOT?: ResellerScalarWhereWithAggregatesInput | ResellerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reseller"> | string
    email?: StringNullableWithAggregatesFilter<"Reseller"> | string | null
    username?: StringWithAggregatesFilter<"Reseller"> | string
    name?: StringWithAggregatesFilter<"Reseller"> | string
    tier?: EnumResellerTierWithAggregatesFilter<"Reseller"> | $Enums.ResellerTier
    status?: EnumResellerStatusWithAggregatesFilter<"Reseller"> | $Enums.ResellerStatus
    balance?: BigIntWithAggregatesFilter<"Reseller"> | bigint | number
    monthlyTurnover?: BigIntWithAggregatesFilter<"Reseller"> | bigint | number
    totalTurnoverAllTime?: BigIntWithAggregatesFilter<"Reseller"> | bigint | number
    discordUserId?: StringNullableWithAggregatesFilter<"Reseller"> | string | null
    telegramUserId?: StringNullableWithAggregatesFilter<"Reseller"> | string | null
    whatsappPhoneNumber?: StringNullableWithAggregatesFilter<"Reseller"> | string | null
    referrerId?: StringNullableWithAggregatesFilter<"Reseller"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Reseller"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Reseller"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Reseller">
    createdAt?: DateTimeWithAggregatesFilter<"Reseller"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reseller"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    gameName?: StringFilter<"Product"> | string
    displayName?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    costPrice?: BigIntFilter<"Product"> | bigint | number
    baseMarkup?: BigIntFilter<"Product"> | bigint | number
    active?: BoolFilter<"Product"> | boolean
    maxStock?: IntNullableFilter<"Product"> | number | null
    currentStock?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orders?: OrderListRelationFilter
    tierPrices?: TierPriceListRelationFilter
    pricingHistory?: ProductPricingListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    gameName?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    baseMarkup?: SortOrder
    active?: SortOrder
    maxStock?: SortOrderInput | SortOrder
    currentStock?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    tierPrices?: TierPriceOrderByRelationAggregateInput
    pricingHistory?: ProductPricingOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    gameName?: StringFilter<"Product"> | string
    displayName?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    costPrice?: BigIntFilter<"Product"> | bigint | number
    baseMarkup?: BigIntFilter<"Product"> | bigint | number
    active?: BoolFilter<"Product"> | boolean
    maxStock?: IntNullableFilter<"Product"> | number | null
    currentStock?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orders?: OrderListRelationFilter
    tierPrices?: TierPriceListRelationFilter
    pricingHistory?: ProductPricingListRelationFilter
  }, "id" | "code">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    gameName?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    baseMarkup?: SortOrder
    active?: SortOrder
    maxStock?: SortOrderInput | SortOrder
    currentStock?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    code?: StringWithAggregatesFilter<"Product"> | string
    gameName?: StringWithAggregatesFilter<"Product"> | string
    displayName?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    costPrice?: BigIntWithAggregatesFilter<"Product"> | bigint | number
    baseMarkup?: BigIntWithAggregatesFilter<"Product"> | bigint | number
    active?: BoolWithAggregatesFilter<"Product"> | boolean
    maxStock?: IntNullableWithAggregatesFilter<"Product"> | number | null
    currentStock?: IntNullableWithAggregatesFilter<"Product"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type TierPriceWhereInput = {
    AND?: TierPriceWhereInput | TierPriceWhereInput[]
    OR?: TierPriceWhereInput[]
    NOT?: TierPriceWhereInput | TierPriceWhereInput[]
    id?: StringFilter<"TierPrice"> | string
    productId?: StringFilter<"TierPrice"> | string
    tier?: EnumResellerTierFilter<"TierPrice"> | $Enums.ResellerTier
    markup?: BigIntFilter<"TierPrice"> | bigint | number
    createdAt?: DateTimeFilter<"TierPrice"> | Date | string
    updatedAt?: DateTimeFilter<"TierPrice"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type TierPriceOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    tier?: SortOrder
    markup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type TierPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_tier?: TierPriceProductIdTierCompoundUniqueInput
    AND?: TierPriceWhereInput | TierPriceWhereInput[]
    OR?: TierPriceWhereInput[]
    NOT?: TierPriceWhereInput | TierPriceWhereInput[]
    productId?: StringFilter<"TierPrice"> | string
    tier?: EnumResellerTierFilter<"TierPrice"> | $Enums.ResellerTier
    markup?: BigIntFilter<"TierPrice"> | bigint | number
    createdAt?: DateTimeFilter<"TierPrice"> | Date | string
    updatedAt?: DateTimeFilter<"TierPrice"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id" | "productId_tier">

  export type TierPriceOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    tier?: SortOrder
    markup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TierPriceCountOrderByAggregateInput
    _avg?: TierPriceAvgOrderByAggregateInput
    _max?: TierPriceMaxOrderByAggregateInput
    _min?: TierPriceMinOrderByAggregateInput
    _sum?: TierPriceSumOrderByAggregateInput
  }

  export type TierPriceScalarWhereWithAggregatesInput = {
    AND?: TierPriceScalarWhereWithAggregatesInput | TierPriceScalarWhereWithAggregatesInput[]
    OR?: TierPriceScalarWhereWithAggregatesInput[]
    NOT?: TierPriceScalarWhereWithAggregatesInput | TierPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TierPrice"> | string
    productId?: StringWithAggregatesFilter<"TierPrice"> | string
    tier?: EnumResellerTierWithAggregatesFilter<"TierPrice"> | $Enums.ResellerTier
    markup?: BigIntWithAggregatesFilter<"TierPrice"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"TierPrice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TierPrice"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: StringFilter<"Deposit"> | string
    resellerId?: StringFilter<"Deposit"> | string
    amount?: BigIntFilter<"Deposit"> | bigint | number
    paymentChannel?: EnumPaymentChannelFilter<"Deposit"> | $Enums.PaymentChannel
    status?: EnumDepositStatusFilter<"Deposit"> | $Enums.DepositStatus
    externalPaymentId?: StringNullableFilter<"Deposit"> | string | null
    paymentUrl?: StringNullableFilter<"Deposit"> | string | null
    qrCodeUrl?: StringNullableFilter<"Deposit"> | string | null
    virtualAccountNumber?: StringNullableFilter<"Deposit"> | string | null
    bankName?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    expiresAt?: DateTimeFilter<"Deposit"> | Date | string
    paidAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    reseller?: XOR<ResellerRelationFilter, ResellerWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    resellerId?: SortOrder
    amount?: SortOrder
    paymentChannel?: SortOrder
    status?: SortOrder
    externalPaymentId?: SortOrderInput | SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    virtualAccountNumber?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    reseller?: ResellerOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalPaymentId?: string
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    resellerId?: StringFilter<"Deposit"> | string
    amount?: BigIntFilter<"Deposit"> | bigint | number
    paymentChannel?: EnumPaymentChannelFilter<"Deposit"> | $Enums.PaymentChannel
    status?: EnumDepositStatusFilter<"Deposit"> | $Enums.DepositStatus
    paymentUrl?: StringNullableFilter<"Deposit"> | string | null
    qrCodeUrl?: StringNullableFilter<"Deposit"> | string | null
    virtualAccountNumber?: StringNullableFilter<"Deposit"> | string | null
    bankName?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    expiresAt?: DateTimeFilter<"Deposit"> | Date | string
    paidAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    reseller?: XOR<ResellerRelationFilter, ResellerWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "externalPaymentId">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    resellerId?: SortOrder
    amount?: SortOrder
    paymentChannel?: SortOrder
    status?: SortOrder
    externalPaymentId?: SortOrderInput | SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    virtualAccountNumber?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deposit"> | string
    resellerId?: StringWithAggregatesFilter<"Deposit"> | string
    amount?: BigIntWithAggregatesFilter<"Deposit"> | bigint | number
    paymentChannel?: EnumPaymentChannelWithAggregatesFilter<"Deposit"> | $Enums.PaymentChannel
    status?: EnumDepositStatusWithAggregatesFilter<"Deposit"> | $Enums.DepositStatus
    externalPaymentId?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    paymentUrl?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    qrCodeUrl?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    virtualAccountNumber?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Deposit"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    resellerId?: StringFilter<"Order"> | string
    productId?: StringFilter<"Order"> | string
    targetGameId?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    costPrice?: BigIntFilter<"Order"> | bigint | number
    resellerPrice?: BigIntFilter<"Order"> | bigint | number
    ppnAmount?: BigIntFilter<"Order"> | bigint | number
    marginAmount?: BigIntFilter<"Order"> | bigint | number
    profit?: BigIntFilter<"Order"> | bigint | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    failureReason?: StringNullableFilter<"Order"> | string | null
    externalRef?: StringNullableFilter<"Order"> | string | null
    supplierOrderData?: StringNullableFilter<"Order"> | string | null
    idempotencyKey?: StringFilter<"Order"> | string
    metadata?: JsonNullableFilter<"Order">
    createdAt?: DateTimeFilter<"Order"> | Date | string
    processedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    reseller?: XOR<ResellerRelationFilter, ResellerWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    resellerId?: SortOrder
    productId?: SortOrder
    targetGameId?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    resellerPrice?: SortOrder
    ppnAmount?: SortOrder
    marginAmount?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    externalRef?: SortOrderInput | SortOrder
    supplierOrderData?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    reseller?: ResellerOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalRef?: string
    idempotencyKey?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    resellerId?: StringFilter<"Order"> | string
    productId?: StringFilter<"Order"> | string
    targetGameId?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    costPrice?: BigIntFilter<"Order"> | bigint | number
    resellerPrice?: BigIntFilter<"Order"> | bigint | number
    ppnAmount?: BigIntFilter<"Order"> | bigint | number
    marginAmount?: BigIntFilter<"Order"> | bigint | number
    profit?: BigIntFilter<"Order"> | bigint | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    failureReason?: StringNullableFilter<"Order"> | string | null
    supplierOrderData?: StringNullableFilter<"Order"> | string | null
    metadata?: JsonNullableFilter<"Order">
    createdAt?: DateTimeFilter<"Order"> | Date | string
    processedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    reseller?: XOR<ResellerRelationFilter, ResellerWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "externalRef" | "idempotencyKey">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    resellerId?: SortOrder
    productId?: SortOrder
    targetGameId?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    resellerPrice?: SortOrder
    ppnAmount?: SortOrder
    marginAmount?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    externalRef?: SortOrderInput | SortOrder
    supplierOrderData?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    resellerId?: StringWithAggregatesFilter<"Order"> | string
    productId?: StringWithAggregatesFilter<"Order"> | string
    targetGameId?: StringWithAggregatesFilter<"Order"> | string
    quantity?: IntWithAggregatesFilter<"Order"> | number
    costPrice?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    resellerPrice?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    ppnAmount?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    marginAmount?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    profit?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    failureReason?: StringNullableWithAggregatesFilter<"Order"> | string | null
    externalRef?: StringNullableWithAggregatesFilter<"Order"> | string | null
    supplierOrderData?: StringNullableWithAggregatesFilter<"Order"> | string | null
    idempotencyKey?: StringWithAggregatesFilter<"Order"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Order">
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    amount?: BigIntFilter<"Transaction"> | bigint | number
    balance_before?: BigIntFilter<"Transaction"> | bigint | number
    balance_after?: BigIntFilter<"Transaction"> | bigint | number
    depositId?: StringNullableFilter<"Transaction"> | string | null
    orderId?: StringNullableFilter<"Transaction"> | string | null
    notes?: StringNullableFilter<"Transaction"> | string | null
    adjustedBy?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    deposit?: XOR<DepositNullableRelationFilter, DepositWhereInput> | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance_before?: SortOrder
    balance_after?: SortOrder
    depositId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    adjustedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deposit?: DepositOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: StringFilter<"Transaction"> | string
    amount?: BigIntFilter<"Transaction"> | bigint | number
    balance_before?: BigIntFilter<"Transaction"> | bigint | number
    balance_after?: BigIntFilter<"Transaction"> | bigint | number
    depositId?: StringNullableFilter<"Transaction"> | string | null
    orderId?: StringNullableFilter<"Transaction"> | string | null
    notes?: StringNullableFilter<"Transaction"> | string | null
    adjustedBy?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    deposit?: XOR<DepositNullableRelationFilter, DepositWhereInput> | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance_before?: SortOrder
    balance_after?: SortOrder
    depositId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    adjustedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    type?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: BigIntWithAggregatesFilter<"Transaction"> | bigint | number
    balance_before?: BigIntWithAggregatesFilter<"Transaction"> | bigint | number
    balance_after?: BigIntWithAggregatesFilter<"Transaction"> | bigint | number
    depositId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    adjustedBy?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    username?: StringFilter<"AdminUser"> | string
    email?: StringNullableFilter<"AdminUser"> | string | null
    passwordHash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    isActive?: BoolFilter<"AdminUser"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    isActive?: BoolFilter<"AdminUser"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "username" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    isActive?: BoolWithAggregatesFilter<"AdminUser"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"AdminUser"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    resellerId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    performedBy?: StringNullableFilter<"AuditLog"> | string | null
    notes?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    reseller?: XOR<ResellerNullableRelationFilter, ResellerWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    resellerId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reseller?: ResellerOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    resellerId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    performedBy?: StringNullableFilter<"AuditLog"> | string | null
    notes?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    reseller?: XOR<ResellerNullableRelationFilter, ResellerWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    resellerId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    resellerId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    oldValue?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    performedBy?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    notes?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type DailySummaryWhereInput = {
    AND?: DailySummaryWhereInput | DailySummaryWhereInput[]
    OR?: DailySummaryWhereInput[]
    NOT?: DailySummaryWhereInput | DailySummaryWhereInput[]
    id?: StringFilter<"DailySummary"> | string
    date?: DateTimeFilter<"DailySummary"> | Date | string
    totalOrders?: IntFilter<"DailySummary"> | number
    successfulOrders?: IntFilter<"DailySummary"> | number
    failedOrders?: IntFilter<"DailySummary"> | number
    totalTurnover?: BigIntFilter<"DailySummary"> | bigint | number
    totalCost?: BigIntFilter<"DailySummary"> | bigint | number
    totalProfit?: BigIntFilter<"DailySummary"> | bigint | number
    totalDeposits?: IntFilter<"DailySummary"> | number
    depositAmount?: BigIntFilter<"DailySummary"> | bigint | number
    newResellers?: IntFilter<"DailySummary"> | number
    createdAt?: DateTimeFilter<"DailySummary"> | Date | string
  }

  export type DailySummaryOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    totalOrders?: SortOrder
    successfulOrders?: SortOrder
    failedOrders?: SortOrder
    totalTurnover?: SortOrder
    totalCost?: SortOrder
    totalProfit?: SortOrder
    totalDeposits?: SortOrder
    depositAmount?: SortOrder
    newResellers?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: Date | string
    AND?: DailySummaryWhereInput | DailySummaryWhereInput[]
    OR?: DailySummaryWhereInput[]
    NOT?: DailySummaryWhereInput | DailySummaryWhereInput[]
    totalOrders?: IntFilter<"DailySummary"> | number
    successfulOrders?: IntFilter<"DailySummary"> | number
    failedOrders?: IntFilter<"DailySummary"> | number
    totalTurnover?: BigIntFilter<"DailySummary"> | bigint | number
    totalCost?: BigIntFilter<"DailySummary"> | bigint | number
    totalProfit?: BigIntFilter<"DailySummary"> | bigint | number
    totalDeposits?: IntFilter<"DailySummary"> | number
    depositAmount?: BigIntFilter<"DailySummary"> | bigint | number
    newResellers?: IntFilter<"DailySummary"> | number
    createdAt?: DateTimeFilter<"DailySummary"> | Date | string
  }, "id" | "date">

  export type DailySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    totalOrders?: SortOrder
    successfulOrders?: SortOrder
    failedOrders?: SortOrder
    totalTurnover?: SortOrder
    totalCost?: SortOrder
    totalProfit?: SortOrder
    totalDeposits?: SortOrder
    depositAmount?: SortOrder
    newResellers?: SortOrder
    createdAt?: SortOrder
    _count?: DailySummaryCountOrderByAggregateInput
    _avg?: DailySummaryAvgOrderByAggregateInput
    _max?: DailySummaryMaxOrderByAggregateInput
    _min?: DailySummaryMinOrderByAggregateInput
    _sum?: DailySummarySumOrderByAggregateInput
  }

  export type DailySummaryScalarWhereWithAggregatesInput = {
    AND?: DailySummaryScalarWhereWithAggregatesInput | DailySummaryScalarWhereWithAggregatesInput[]
    OR?: DailySummaryScalarWhereWithAggregatesInput[]
    NOT?: DailySummaryScalarWhereWithAggregatesInput | DailySummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailySummary"> | string
    date?: DateTimeWithAggregatesFilter<"DailySummary"> | Date | string
    totalOrders?: IntWithAggregatesFilter<"DailySummary"> | number
    successfulOrders?: IntWithAggregatesFilter<"DailySummary"> | number
    failedOrders?: IntWithAggregatesFilter<"DailySummary"> | number
    totalTurnover?: BigIntWithAggregatesFilter<"DailySummary"> | bigint | number
    totalCost?: BigIntWithAggregatesFilter<"DailySummary"> | bigint | number
    totalProfit?: BigIntWithAggregatesFilter<"DailySummary"> | bigint | number
    totalDeposits?: IntWithAggregatesFilter<"DailySummary"> | number
    depositAmount?: BigIntWithAggregatesFilter<"DailySummary"> | bigint | number
    newResellers?: IntWithAggregatesFilter<"DailySummary"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailySummary"> | Date | string
  }

  export type MonthlySummaryWhereInput = {
    AND?: MonthlySummaryWhereInput | MonthlySummaryWhereInput[]
    OR?: MonthlySummaryWhereInput[]
    NOT?: MonthlySummaryWhereInput | MonthlySummaryWhereInput[]
    id?: StringFilter<"MonthlySummary"> | string
    year?: IntFilter<"MonthlySummary"> | number
    month?: IntFilter<"MonthlySummary"> | number
    totalOrders?: IntFilter<"MonthlySummary"> | number
    totalTurnover?: BigIntFilter<"MonthlySummary"> | bigint | number
    totalProfit?: BigIntFilter<"MonthlySummary"> | bigint | number
    averageOrderValue?: BigIntFilter<"MonthlySummary"> | bigint | number
    totalDeposits?: IntFilter<"MonthlySummary"> | number
    totalDepositAmount?: BigIntFilter<"MonthlySummary"> | bigint | number
    taxableIncome?: BigIntFilter<"MonthlySummary"> | bigint | number
    estimatedTax?: BigIntFilter<"MonthlySummary"> | bigint | number
    createdAt?: DateTimeFilter<"MonthlySummary"> | Date | string
  }

  export type MonthlySummaryOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalOrders?: SortOrder
    totalTurnover?: SortOrder
    totalProfit?: SortOrder
    averageOrderValue?: SortOrder
    totalDeposits?: SortOrder
    totalDepositAmount?: SortOrder
    taxableIncome?: SortOrder
    estimatedTax?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    year_month?: MonthlySummaryYearMonthCompoundUniqueInput
    AND?: MonthlySummaryWhereInput | MonthlySummaryWhereInput[]
    OR?: MonthlySummaryWhereInput[]
    NOT?: MonthlySummaryWhereInput | MonthlySummaryWhereInput[]
    year?: IntFilter<"MonthlySummary"> | number
    month?: IntFilter<"MonthlySummary"> | number
    totalOrders?: IntFilter<"MonthlySummary"> | number
    totalTurnover?: BigIntFilter<"MonthlySummary"> | bigint | number
    totalProfit?: BigIntFilter<"MonthlySummary"> | bigint | number
    averageOrderValue?: BigIntFilter<"MonthlySummary"> | bigint | number
    totalDeposits?: IntFilter<"MonthlySummary"> | number
    totalDepositAmount?: BigIntFilter<"MonthlySummary"> | bigint | number
    taxableIncome?: BigIntFilter<"MonthlySummary"> | bigint | number
    estimatedTax?: BigIntFilter<"MonthlySummary"> | bigint | number
    createdAt?: DateTimeFilter<"MonthlySummary"> | Date | string
  }, "id" | "year_month">

  export type MonthlySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalOrders?: SortOrder
    totalTurnover?: SortOrder
    totalProfit?: SortOrder
    averageOrderValue?: SortOrder
    totalDeposits?: SortOrder
    totalDepositAmount?: SortOrder
    taxableIncome?: SortOrder
    estimatedTax?: SortOrder
    createdAt?: SortOrder
    _count?: MonthlySummaryCountOrderByAggregateInput
    _avg?: MonthlySummaryAvgOrderByAggregateInput
    _max?: MonthlySummaryMaxOrderByAggregateInput
    _min?: MonthlySummaryMinOrderByAggregateInput
    _sum?: MonthlySummarySumOrderByAggregateInput
  }

  export type MonthlySummaryScalarWhereWithAggregatesInput = {
    AND?: MonthlySummaryScalarWhereWithAggregatesInput | MonthlySummaryScalarWhereWithAggregatesInput[]
    OR?: MonthlySummaryScalarWhereWithAggregatesInput[]
    NOT?: MonthlySummaryScalarWhereWithAggregatesInput | MonthlySummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlySummary"> | string
    year?: IntWithAggregatesFilter<"MonthlySummary"> | number
    month?: IntWithAggregatesFilter<"MonthlySummary"> | number
    totalOrders?: IntWithAggregatesFilter<"MonthlySummary"> | number
    totalTurnover?: BigIntWithAggregatesFilter<"MonthlySummary"> | bigint | number
    totalProfit?: BigIntWithAggregatesFilter<"MonthlySummary"> | bigint | number
    averageOrderValue?: BigIntWithAggregatesFilter<"MonthlySummary"> | bigint | number
    totalDeposits?: IntWithAggregatesFilter<"MonthlySummary"> | number
    totalDepositAmount?: BigIntWithAggregatesFilter<"MonthlySummary"> | bigint | number
    taxableIncome?: BigIntWithAggregatesFilter<"MonthlySummary"> | bigint | number
    estimatedTax?: BigIntWithAggregatesFilter<"MonthlySummary"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"MonthlySummary"> | Date | string
  }

  export type WebhookLogWhereInput = {
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    id?: StringFilter<"WebhookLog"> | string
    source?: StringFilter<"WebhookLog"> | string
    event?: StringFilter<"WebhookLog"> | string
    payload?: StringFilter<"WebhookLog"> | string
    ipAddress?: StringNullableFilter<"WebhookLog"> | string | null
    isValid?: BoolFilter<"WebhookLog"> | boolean
    error?: StringNullableFilter<"WebhookLog"> | string | null
    processedAt?: DateTimeNullableFilter<"WebhookLog"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
  }

  export type WebhookLogOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    isValid?: SortOrder
    error?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    source?: StringFilter<"WebhookLog"> | string
    event?: StringFilter<"WebhookLog"> | string
    payload?: StringFilter<"WebhookLog"> | string
    ipAddress?: StringNullableFilter<"WebhookLog"> | string | null
    isValid?: BoolFilter<"WebhookLog"> | boolean
    error?: StringNullableFilter<"WebhookLog"> | string | null
    processedAt?: DateTimeNullableFilter<"WebhookLog"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
  }, "id">

  export type WebhookLogOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    isValid?: SortOrder
    error?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookLogCountOrderByAggregateInput
    _max?: WebhookLogMaxOrderByAggregateInput
    _min?: WebhookLogMinOrderByAggregateInput
  }

  export type WebhookLogScalarWhereWithAggregatesInput = {
    AND?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    OR?: WebhookLogScalarWhereWithAggregatesInput[]
    NOT?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookLog"> | string
    source?: StringWithAggregatesFilter<"WebhookLog"> | string
    event?: StringWithAggregatesFilter<"WebhookLog"> | string
    payload?: StringWithAggregatesFilter<"WebhookLog"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    isValid?: BoolWithAggregatesFilter<"WebhookLog"> | boolean
    error?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"WebhookLog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookLog"> | Date | string
  }

  export type ProductPricingWhereInput = {
    AND?: ProductPricingWhereInput | ProductPricingWhereInput[]
    OR?: ProductPricingWhereInput[]
    NOT?: ProductPricingWhereInput | ProductPricingWhereInput[]
    id?: StringFilter<"ProductPricing"> | string
    productId?: StringFilter<"ProductPricing"> | string
    denomination?: IntFilter<"ProductPricing"> | number
    supplierPrice?: BigIntFilter<"ProductPricing"> | bigint | number
    effectiveFrom?: DateTimeFilter<"ProductPricing"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductPricing"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductPricing"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPricing"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductPricingOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    denomination?: SortOrder
    supplierPrice?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductPricingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductPricingWhereInput | ProductPricingWhereInput[]
    OR?: ProductPricingWhereInput[]
    NOT?: ProductPricingWhereInput | ProductPricingWhereInput[]
    productId?: StringFilter<"ProductPricing"> | string
    denomination?: IntFilter<"ProductPricing"> | number
    supplierPrice?: BigIntFilter<"ProductPricing"> | bigint | number
    effectiveFrom?: DateTimeFilter<"ProductPricing"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductPricing"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductPricing"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPricing"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductPricingOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    denomination?: SortOrder
    supplierPrice?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductPricingCountOrderByAggregateInput
    _avg?: ProductPricingAvgOrderByAggregateInput
    _max?: ProductPricingMaxOrderByAggregateInput
    _min?: ProductPricingMinOrderByAggregateInput
    _sum?: ProductPricingSumOrderByAggregateInput
  }

  export type ProductPricingScalarWhereWithAggregatesInput = {
    AND?: ProductPricingScalarWhereWithAggregatesInput | ProductPricingScalarWhereWithAggregatesInput[]
    OR?: ProductPricingScalarWhereWithAggregatesInput[]
    NOT?: ProductPricingScalarWhereWithAggregatesInput | ProductPricingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductPricing"> | string
    productId?: StringWithAggregatesFilter<"ProductPricing"> | string
    denomination?: IntWithAggregatesFilter<"ProductPricing"> | number
    supplierPrice?: BigIntWithAggregatesFilter<"ProductPricing"> | bigint | number
    effectiveFrom?: DateTimeWithAggregatesFilter<"ProductPricing"> | Date | string
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"ProductPricing"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductPricing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductPricing"> | Date | string
  }

  export type SupplierPanelWhereInput = {
    AND?: SupplierPanelWhereInput | SupplierPanelWhereInput[]
    OR?: SupplierPanelWhereInput[]
    NOT?: SupplierPanelWhereInput | SupplierPanelWhereInput[]
    id?: StringFilter<"SupplierPanel"> | string
    name?: StringFilter<"SupplierPanel"> | string
    apiUrl?: StringFilter<"SupplierPanel"> | string
    apiKey?: StringFilter<"SupplierPanel"> | string
    isActive?: BoolFilter<"SupplierPanel"> | boolean
    priority?: IntFilter<"SupplierPanel"> | number
    healthStatus?: StringFilter<"SupplierPanel"> | string
    successRate?: FloatFilter<"SupplierPanel"> | number
    avgResponseTimeMs?: IntFilter<"SupplierPanel"> | number
    lastHealthCheck?: DateTimeNullableFilter<"SupplierPanel"> | Date | string | null
    totalRequests?: IntFilter<"SupplierPanel"> | number
    totalSuccesses?: IntFilter<"SupplierPanel"> | number
    totalFailures?: IntFilter<"SupplierPanel"> | number
    createdAt?: DateTimeFilter<"SupplierPanel"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierPanel"> | Date | string
    products?: SupplierProductListRelationFilter
    healthMetrics?: SupplierHealthMetricListRelationFilter
  }

  export type SupplierPanelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    healthStatus?: SortOrder
    successRate?: SortOrder
    avgResponseTimeMs?: SortOrder
    lastHealthCheck?: SortOrderInput | SortOrder
    totalRequests?: SortOrder
    totalSuccesses?: SortOrder
    totalFailures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: SupplierProductOrderByRelationAggregateInput
    healthMetrics?: SupplierHealthMetricOrderByRelationAggregateInput
  }

  export type SupplierPanelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierPanelWhereInput | SupplierPanelWhereInput[]
    OR?: SupplierPanelWhereInput[]
    NOT?: SupplierPanelWhereInput | SupplierPanelWhereInput[]
    name?: StringFilter<"SupplierPanel"> | string
    apiUrl?: StringFilter<"SupplierPanel"> | string
    apiKey?: StringFilter<"SupplierPanel"> | string
    isActive?: BoolFilter<"SupplierPanel"> | boolean
    priority?: IntFilter<"SupplierPanel"> | number
    healthStatus?: StringFilter<"SupplierPanel"> | string
    successRate?: FloatFilter<"SupplierPanel"> | number
    avgResponseTimeMs?: IntFilter<"SupplierPanel"> | number
    lastHealthCheck?: DateTimeNullableFilter<"SupplierPanel"> | Date | string | null
    totalRequests?: IntFilter<"SupplierPanel"> | number
    totalSuccesses?: IntFilter<"SupplierPanel"> | number
    totalFailures?: IntFilter<"SupplierPanel"> | number
    createdAt?: DateTimeFilter<"SupplierPanel"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierPanel"> | Date | string
    products?: SupplierProductListRelationFilter
    healthMetrics?: SupplierHealthMetricListRelationFilter
  }, "id">

  export type SupplierPanelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    healthStatus?: SortOrder
    successRate?: SortOrder
    avgResponseTimeMs?: SortOrder
    lastHealthCheck?: SortOrderInput | SortOrder
    totalRequests?: SortOrder
    totalSuccesses?: SortOrder
    totalFailures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierPanelCountOrderByAggregateInput
    _avg?: SupplierPanelAvgOrderByAggregateInput
    _max?: SupplierPanelMaxOrderByAggregateInput
    _min?: SupplierPanelMinOrderByAggregateInput
    _sum?: SupplierPanelSumOrderByAggregateInput
  }

  export type SupplierPanelScalarWhereWithAggregatesInput = {
    AND?: SupplierPanelScalarWhereWithAggregatesInput | SupplierPanelScalarWhereWithAggregatesInput[]
    OR?: SupplierPanelScalarWhereWithAggregatesInput[]
    NOT?: SupplierPanelScalarWhereWithAggregatesInput | SupplierPanelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierPanel"> | string
    name?: StringWithAggregatesFilter<"SupplierPanel"> | string
    apiUrl?: StringWithAggregatesFilter<"SupplierPanel"> | string
    apiKey?: StringWithAggregatesFilter<"SupplierPanel"> | string
    isActive?: BoolWithAggregatesFilter<"SupplierPanel"> | boolean
    priority?: IntWithAggregatesFilter<"SupplierPanel"> | number
    healthStatus?: StringWithAggregatesFilter<"SupplierPanel"> | string
    successRate?: FloatWithAggregatesFilter<"SupplierPanel"> | number
    avgResponseTimeMs?: IntWithAggregatesFilter<"SupplierPanel"> | number
    lastHealthCheck?: DateTimeNullableWithAggregatesFilter<"SupplierPanel"> | Date | string | null
    totalRequests?: IntWithAggregatesFilter<"SupplierPanel"> | number
    totalSuccesses?: IntWithAggregatesFilter<"SupplierPanel"> | number
    totalFailures?: IntWithAggregatesFilter<"SupplierPanel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SupplierPanel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupplierPanel"> | Date | string
  }

  export type SupplierProductWhereInput = {
    AND?: SupplierProductWhereInput | SupplierProductWhereInput[]
    OR?: SupplierProductWhereInput[]
    NOT?: SupplierProductWhereInput | SupplierProductWhereInput[]
    id?: StringFilter<"SupplierProduct"> | string
    panelId?: StringFilter<"SupplierProduct"> | string
    productCode?: StringFilter<"SupplierProduct"> | string
    isAvailable?: BoolFilter<"SupplierProduct"> | boolean
    lastPrice?: BigIntNullableFilter<"SupplierProduct"> | bigint | number | null
    createdAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    panel?: XOR<SupplierPanelRelationFilter, SupplierPanelWhereInput>
  }

  export type SupplierProductOrderByWithRelationInput = {
    id?: SortOrder
    panelId?: SortOrder
    productCode?: SortOrder
    isAvailable?: SortOrder
    lastPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    panel?: SupplierPanelOrderByWithRelationInput
  }

  export type SupplierProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    panelId_productCode?: SupplierProductPanelIdProductCodeCompoundUniqueInput
    AND?: SupplierProductWhereInput | SupplierProductWhereInput[]
    OR?: SupplierProductWhereInput[]
    NOT?: SupplierProductWhereInput | SupplierProductWhereInput[]
    panelId?: StringFilter<"SupplierProduct"> | string
    productCode?: StringFilter<"SupplierProduct"> | string
    isAvailable?: BoolFilter<"SupplierProduct"> | boolean
    lastPrice?: BigIntNullableFilter<"SupplierProduct"> | bigint | number | null
    createdAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    panel?: XOR<SupplierPanelRelationFilter, SupplierPanelWhereInput>
  }, "id" | "panelId_productCode">

  export type SupplierProductOrderByWithAggregationInput = {
    id?: SortOrder
    panelId?: SortOrder
    productCode?: SortOrder
    isAvailable?: SortOrder
    lastPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierProductCountOrderByAggregateInput
    _avg?: SupplierProductAvgOrderByAggregateInput
    _max?: SupplierProductMaxOrderByAggregateInput
    _min?: SupplierProductMinOrderByAggregateInput
    _sum?: SupplierProductSumOrderByAggregateInput
  }

  export type SupplierProductScalarWhereWithAggregatesInput = {
    AND?: SupplierProductScalarWhereWithAggregatesInput | SupplierProductScalarWhereWithAggregatesInput[]
    OR?: SupplierProductScalarWhereWithAggregatesInput[]
    NOT?: SupplierProductScalarWhereWithAggregatesInput | SupplierProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierProduct"> | string
    panelId?: StringWithAggregatesFilter<"SupplierProduct"> | string
    productCode?: StringWithAggregatesFilter<"SupplierProduct"> | string
    isAvailable?: BoolWithAggregatesFilter<"SupplierProduct"> | boolean
    lastPrice?: BigIntNullableWithAggregatesFilter<"SupplierProduct"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SupplierProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupplierProduct"> | Date | string
  }

  export type SupplierHealthMetricWhereInput = {
    AND?: SupplierHealthMetricWhereInput | SupplierHealthMetricWhereInput[]
    OR?: SupplierHealthMetricWhereInput[]
    NOT?: SupplierHealthMetricWhereInput | SupplierHealthMetricWhereInput[]
    id?: StringFilter<"SupplierHealthMetric"> | string
    panelId?: StringFilter<"SupplierHealthMetric"> | string
    responseTimeMs?: IntFilter<"SupplierHealthMetric"> | number
    isHealthy?: BoolFilter<"SupplierHealthMetric"> | boolean
    createdAt?: DateTimeFilter<"SupplierHealthMetric"> | Date | string
    panel?: XOR<SupplierPanelRelationFilter, SupplierPanelWhereInput>
  }

  export type SupplierHealthMetricOrderByWithRelationInput = {
    id?: SortOrder
    panelId?: SortOrder
    responseTimeMs?: SortOrder
    isHealthy?: SortOrder
    createdAt?: SortOrder
    panel?: SupplierPanelOrderByWithRelationInput
  }

  export type SupplierHealthMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierHealthMetricWhereInput | SupplierHealthMetricWhereInput[]
    OR?: SupplierHealthMetricWhereInput[]
    NOT?: SupplierHealthMetricWhereInput | SupplierHealthMetricWhereInput[]
    panelId?: StringFilter<"SupplierHealthMetric"> | string
    responseTimeMs?: IntFilter<"SupplierHealthMetric"> | number
    isHealthy?: BoolFilter<"SupplierHealthMetric"> | boolean
    createdAt?: DateTimeFilter<"SupplierHealthMetric"> | Date | string
    panel?: XOR<SupplierPanelRelationFilter, SupplierPanelWhereInput>
  }, "id">

  export type SupplierHealthMetricOrderByWithAggregationInput = {
    id?: SortOrder
    panelId?: SortOrder
    responseTimeMs?: SortOrder
    isHealthy?: SortOrder
    createdAt?: SortOrder
    _count?: SupplierHealthMetricCountOrderByAggregateInput
    _avg?: SupplierHealthMetricAvgOrderByAggregateInput
    _max?: SupplierHealthMetricMaxOrderByAggregateInput
    _min?: SupplierHealthMetricMinOrderByAggregateInput
    _sum?: SupplierHealthMetricSumOrderByAggregateInput
  }

  export type SupplierHealthMetricScalarWhereWithAggregatesInput = {
    AND?: SupplierHealthMetricScalarWhereWithAggregatesInput | SupplierHealthMetricScalarWhereWithAggregatesInput[]
    OR?: SupplierHealthMetricScalarWhereWithAggregatesInput[]
    NOT?: SupplierHealthMetricScalarWhereWithAggregatesInput | SupplierHealthMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierHealthMetric"> | string
    panelId?: StringWithAggregatesFilter<"SupplierHealthMetric"> | string
    responseTimeMs?: IntWithAggregatesFilter<"SupplierHealthMetric"> | number
    isHealthy?: BoolWithAggregatesFilter<"SupplierHealthMetric"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SupplierHealthMetric"> | Date | string
  }

  export type ResellerCreateInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrer?: ResellerCreateNestedOneWithoutReferralsInput
    referrals?: ResellerCreateNestedManyWithoutReferrerInput
    orders?: OrderCreateNestedManyWithoutResellerInput
    deposits?: DepositCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogCreateNestedManyWithoutResellerInput
  }

  export type ResellerUncheckedCreateInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    referrerId?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: ResellerUncheckedCreateNestedManyWithoutReferrerInput
    orders?: OrderUncheckedCreateNestedManyWithoutResellerInput
    deposits?: DepositUncheckedCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutResellerInput
  }

  export type ResellerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: ResellerUpdateOneWithoutReferralsNestedInput
    referrals?: ResellerUpdateManyWithoutReferrerNestedInput
    orders?: OrderUpdateManyWithoutResellerNestedInput
    deposits?: DepositUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutResellerNestedInput
  }

  export type ResellerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    referrerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: ResellerUncheckedUpdateManyWithoutReferrerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutResellerNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutResellerNestedInput
  }

  export type ResellerCreateManyInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    referrerId?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    referrerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProductInput
    tierPrices?: TierPriceCreateNestedManyWithoutProductInput
    pricingHistory?: ProductPricingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    tierPrices?: TierPriceUncheckedCreateNestedManyWithoutProductInput
    pricingHistory?: ProductPricingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    tierPrices?: TierPriceUpdateManyWithoutProductNestedInput
    pricingHistory?: ProductPricingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    tierPrices?: TierPriceUncheckedUpdateManyWithoutProductNestedInput
    pricingHistory?: ProductPricingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TierPriceCreateInput = {
    id?: string
    tier: $Enums.ResellerTier
    markup: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutTierPricesInput
  }

  export type TierPriceUncheckedCreateInput = {
    id?: string
    productId: string
    tier: $Enums.ResellerTier
    markup: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TierPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    markup?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutTierPricesNestedInput
  }

  export type TierPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    markup?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TierPriceCreateManyInput = {
    id?: string
    productId: string
    tier: $Enums.ResellerTier
    markup: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TierPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    markup?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TierPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    markup?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    id?: string
    amount: bigint | number
    paymentChannel?: $Enums.PaymentChannel
    status?: $Enums.DepositStatus
    externalPaymentId?: string | null
    paymentUrl?: string | null
    qrCodeUrl?: string | null
    virtualAccountNumber?: string | null
    bankName?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    paidAt?: Date | string | null
    updatedAt?: Date | string
    reseller: ResellerCreateNestedOneWithoutDepositsInput
    transactions?: TransactionCreateNestedManyWithoutDepositInput
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    resellerId: string
    amount: bigint | number
    paymentChannel?: $Enums.PaymentChannel
    status?: $Enums.DepositStatus
    externalPaymentId?: string | null
    paymentUrl?: string | null
    qrCodeUrl?: string | null
    virtualAccountNumber?: string | null
    bankName?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    paidAt?: Date | string | null
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutDepositInput
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reseller?: ResellerUpdateOneRequiredWithoutDepositsNestedInput
    transactions?: TransactionUpdateManyWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutDepositNestedInput
  }

  export type DepositCreateManyInput = {
    id?: string
    resellerId: string
    amount: bigint | number
    paymentChannel?: $Enums.PaymentChannel
    status?: $Enums.DepositStatus
    externalPaymentId?: string | null
    paymentUrl?: string | null
    qrCodeUrl?: string | null
    virtualAccountNumber?: string | null
    bankName?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    paidAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
    reseller: ResellerCreateNestedOneWithoutOrdersInput
    product: ProductCreateNestedOneWithoutOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    resellerId: string
    productId: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reseller?: ResellerUpdateOneRequiredWithoutOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    resellerId: string
    productId: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
    deposit?: DepositCreateNestedOneWithoutTransactionsInput
    order?: OrderCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    depositId?: string | null
    orderId?: string | null
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: DepositUpdateOneWithoutTransactionsNestedInput
    order?: OrderUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    depositId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    depositId?: string | null
    orderId?: string | null
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    depositId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    username: string
    email?: string | null
    passwordHash: string
    role?: string
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    oldValue?: string | null
    newValue?: string | null
    performedBy?: string | null
    notes?: string | null
    createdAt?: Date | string
    reseller?: ResellerCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    resellerId?: string | null
    action: string
    entityType: string
    entityId: string
    oldValue?: string | null
    newValue?: string | null
    performedBy?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reseller?: ResellerUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    resellerId?: string | null
    action: string
    entityType: string
    entityId: string
    oldValue?: string | null
    newValue?: string | null
    performedBy?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryCreateInput = {
    id?: string
    date: Date | string
    totalOrders: number
    successfulOrders: number
    failedOrders: number
    totalTurnover: bigint | number
    totalCost: bigint | number
    totalProfit: bigint | number
    totalDeposits: number
    depositAmount: bigint | number
    newResellers: number
    createdAt?: Date | string
  }

  export type DailySummaryUncheckedCreateInput = {
    id?: string
    date: Date | string
    totalOrders: number
    successfulOrders: number
    failedOrders: number
    totalTurnover: bigint | number
    totalCost: bigint | number
    totalProfit: bigint | number
    totalDeposits: number
    depositAmount: bigint | number
    newResellers: number
    createdAt?: Date | string
  }

  export type DailySummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    successfulOrders?: IntFieldUpdateOperationsInput | number
    failedOrders?: IntFieldUpdateOperationsInput | number
    totalTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalCost?: BigIntFieldUpdateOperationsInput | bigint | number
    totalProfit?: BigIntFieldUpdateOperationsInput | bigint | number
    totalDeposits?: IntFieldUpdateOperationsInput | number
    depositAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    newResellers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    successfulOrders?: IntFieldUpdateOperationsInput | number
    failedOrders?: IntFieldUpdateOperationsInput | number
    totalTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalCost?: BigIntFieldUpdateOperationsInput | bigint | number
    totalProfit?: BigIntFieldUpdateOperationsInput | bigint | number
    totalDeposits?: IntFieldUpdateOperationsInput | number
    depositAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    newResellers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryCreateManyInput = {
    id?: string
    date: Date | string
    totalOrders: number
    successfulOrders: number
    failedOrders: number
    totalTurnover: bigint | number
    totalCost: bigint | number
    totalProfit: bigint | number
    totalDeposits: number
    depositAmount: bigint | number
    newResellers: number
    createdAt?: Date | string
  }

  export type DailySummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    successfulOrders?: IntFieldUpdateOperationsInput | number
    failedOrders?: IntFieldUpdateOperationsInput | number
    totalTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalCost?: BigIntFieldUpdateOperationsInput | bigint | number
    totalProfit?: BigIntFieldUpdateOperationsInput | bigint | number
    totalDeposits?: IntFieldUpdateOperationsInput | number
    depositAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    newResellers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    successfulOrders?: IntFieldUpdateOperationsInput | number
    failedOrders?: IntFieldUpdateOperationsInput | number
    totalTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalCost?: BigIntFieldUpdateOperationsInput | bigint | number
    totalProfit?: BigIntFieldUpdateOperationsInput | bigint | number
    totalDeposits?: IntFieldUpdateOperationsInput | number
    depositAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    newResellers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlySummaryCreateInput = {
    id?: string
    year: number
    month: number
    totalOrders: number
    totalTurnover: bigint | number
    totalProfit: bigint | number
    averageOrderValue: bigint | number
    totalDeposits: number
    totalDepositAmount: bigint | number
    taxableIncome: bigint | number
    estimatedTax: bigint | number
    createdAt?: Date | string
  }

  export type MonthlySummaryUncheckedCreateInput = {
    id?: string
    year: number
    month: number
    totalOrders: number
    totalTurnover: bigint | number
    totalProfit: bigint | number
    averageOrderValue: bigint | number
    totalDeposits: number
    totalDepositAmount: bigint | number
    taxableIncome: bigint | number
    estimatedTax: bigint | number
    createdAt?: Date | string
  }

  export type MonthlySummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalProfit?: BigIntFieldUpdateOperationsInput | bigint | number
    averageOrderValue?: BigIntFieldUpdateOperationsInput | bigint | number
    totalDeposits?: IntFieldUpdateOperationsInput | number
    totalDepositAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    taxableIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    estimatedTax?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlySummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalProfit?: BigIntFieldUpdateOperationsInput | bigint | number
    averageOrderValue?: BigIntFieldUpdateOperationsInput | bigint | number
    totalDeposits?: IntFieldUpdateOperationsInput | number
    totalDepositAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    taxableIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    estimatedTax?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlySummaryCreateManyInput = {
    id?: string
    year: number
    month: number
    totalOrders: number
    totalTurnover: bigint | number
    totalProfit: bigint | number
    averageOrderValue: bigint | number
    totalDeposits: number
    totalDepositAmount: bigint | number
    taxableIncome: bigint | number
    estimatedTax: bigint | number
    createdAt?: Date | string
  }

  export type MonthlySummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalProfit?: BigIntFieldUpdateOperationsInput | bigint | number
    averageOrderValue?: BigIntFieldUpdateOperationsInput | bigint | number
    totalDeposits?: IntFieldUpdateOperationsInput | number
    totalDepositAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    taxableIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    estimatedTax?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlySummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalProfit?: BigIntFieldUpdateOperationsInput | bigint | number
    averageOrderValue?: BigIntFieldUpdateOperationsInput | bigint | number
    totalDeposits?: IntFieldUpdateOperationsInput | number
    totalDepositAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    taxableIncome?: BigIntFieldUpdateOperationsInput | bigint | number
    estimatedTax?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateInput = {
    id?: string
    source: string
    event: string
    payload: string
    ipAddress?: string | null
    isValid: boolean
    error?: string | null
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookLogUncheckedCreateInput = {
    id?: string
    source: string
    event: string
    payload: string
    ipAddress?: string | null
    isValid: boolean
    error?: string | null
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isValid?: BoolFieldUpdateOperationsInput | boolean
    error?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isValid?: BoolFieldUpdateOperationsInput | boolean
    error?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateManyInput = {
    id?: string
    source: string
    event: string
    payload: string
    ipAddress?: string | null
    isValid: boolean
    error?: string | null
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isValid?: BoolFieldUpdateOperationsInput | boolean
    error?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isValid?: BoolFieldUpdateOperationsInput | boolean
    error?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricingCreateInput = {
    id?: string
    denomination: number
    supplierPrice: bigint | number
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutPricingHistoryInput
  }

  export type ProductPricingUncheckedCreateInput = {
    id?: string
    productId: string
    denomination: number
    supplierPrice: bigint | number
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPricingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    denomination?: IntFieldUpdateOperationsInput | number
    supplierPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPricingHistoryNestedInput
  }

  export type ProductPricingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    denomination?: IntFieldUpdateOperationsInput | number
    supplierPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricingCreateManyInput = {
    id?: string
    productId: string
    denomination: number
    supplierPrice: bigint | number
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPricingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    denomination?: IntFieldUpdateOperationsInput | number
    supplierPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    denomination?: IntFieldUpdateOperationsInput | number
    supplierPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPanelCreateInput = {
    id?: string
    name: string
    apiUrl: string
    apiKey: string
    isActive?: boolean
    priority?: number
    healthStatus?: string
    successRate?: number
    avgResponseTimeMs?: number
    lastHealthCheck?: Date | string | null
    totalRequests?: number
    totalSuccesses?: number
    totalFailures?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: SupplierProductCreateNestedManyWithoutPanelInput
    healthMetrics?: SupplierHealthMetricCreateNestedManyWithoutPanelInput
  }

  export type SupplierPanelUncheckedCreateInput = {
    id?: string
    name: string
    apiUrl: string
    apiKey: string
    isActive?: boolean
    priority?: number
    healthStatus?: string
    successRate?: number
    avgResponseTimeMs?: number
    lastHealthCheck?: Date | string | null
    totalRequests?: number
    totalSuccesses?: number
    totalFailures?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: SupplierProductUncheckedCreateNestedManyWithoutPanelInput
    healthMetrics?: SupplierHealthMetricUncheckedCreateNestedManyWithoutPanelInput
  }

  export type SupplierPanelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    healthStatus?: StringFieldUpdateOperationsInput | string
    successRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTimeMs?: IntFieldUpdateOperationsInput | number
    lastHealthCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalSuccesses?: IntFieldUpdateOperationsInput | number
    totalFailures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: SupplierProductUpdateManyWithoutPanelNestedInput
    healthMetrics?: SupplierHealthMetricUpdateManyWithoutPanelNestedInput
  }

  export type SupplierPanelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    healthStatus?: StringFieldUpdateOperationsInput | string
    successRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTimeMs?: IntFieldUpdateOperationsInput | number
    lastHealthCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalSuccesses?: IntFieldUpdateOperationsInput | number
    totalFailures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: SupplierProductUncheckedUpdateManyWithoutPanelNestedInput
    healthMetrics?: SupplierHealthMetricUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type SupplierPanelCreateManyInput = {
    id?: string
    name: string
    apiUrl: string
    apiKey: string
    isActive?: boolean
    priority?: number
    healthStatus?: string
    successRate?: number
    avgResponseTimeMs?: number
    lastHealthCheck?: Date | string | null
    totalRequests?: number
    totalSuccesses?: number
    totalFailures?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierPanelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    healthStatus?: StringFieldUpdateOperationsInput | string
    successRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTimeMs?: IntFieldUpdateOperationsInput | number
    lastHealthCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalSuccesses?: IntFieldUpdateOperationsInput | number
    totalFailures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPanelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    healthStatus?: StringFieldUpdateOperationsInput | string
    successRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTimeMs?: IntFieldUpdateOperationsInput | number
    lastHealthCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalSuccesses?: IntFieldUpdateOperationsInput | number
    totalFailures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductCreateInput = {
    id?: string
    productCode: string
    isAvailable?: boolean
    lastPrice?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panel: SupplierPanelCreateNestedOneWithoutProductsInput
  }

  export type SupplierProductUncheckedCreateInput = {
    id?: string
    panelId: string
    productCode: string
    isAvailable?: boolean
    lastPrice?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: SupplierPanelUpdateOneRequiredWithoutProductsNestedInput
  }

  export type SupplierProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductCreateManyInput = {
    id?: string
    panelId: string
    productCode: string
    isAvailable?: boolean
    lastPrice?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierHealthMetricCreateInput = {
    id?: string
    responseTimeMs: number
    isHealthy: boolean
    createdAt?: Date | string
    panel: SupplierPanelCreateNestedOneWithoutHealthMetricsInput
  }

  export type SupplierHealthMetricUncheckedCreateInput = {
    id?: string
    panelId: string
    responseTimeMs: number
    isHealthy: boolean
    createdAt?: Date | string
  }

  export type SupplierHealthMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    isHealthy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: SupplierPanelUpdateOneRequiredWithoutHealthMetricsNestedInput
  }

  export type SupplierHealthMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    isHealthy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierHealthMetricCreateManyInput = {
    id?: string
    panelId: string
    responseTimeMs: number
    isHealthy: boolean
    createdAt?: Date | string
  }

  export type SupplierHealthMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    isHealthy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierHealthMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    isHealthy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumResellerTierFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellerTier | EnumResellerTierFieldRefInput<$PrismaModel>
    in?: $Enums.ResellerTier[] | ListEnumResellerTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellerTier[] | ListEnumResellerTierFieldRefInput<$PrismaModel>
    not?: NestedEnumResellerTierFilter<$PrismaModel> | $Enums.ResellerTier
  }

  export type EnumResellerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellerStatus | EnumResellerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResellerStatus[] | ListEnumResellerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellerStatus[] | ListEnumResellerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResellerStatusFilter<$PrismaModel> | $Enums.ResellerStatus
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResellerNullableRelationFilter = {
    is?: ResellerWhereInput | null
    isNot?: ResellerWhereInput | null
  }

  export type ResellerListRelationFilter = {
    every?: ResellerWhereInput
    some?: ResellerWhereInput
    none?: ResellerWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResellerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResellerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    monthlyTurnover?: SortOrder
    totalTurnoverAllTime?: SortOrder
    discordUserId?: SortOrder
    telegramUserId?: SortOrder
    whatsappPhoneNumber?: SortOrder
    referrerId?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellerAvgOrderByAggregateInput = {
    balance?: SortOrder
    monthlyTurnover?: SortOrder
    totalTurnoverAllTime?: SortOrder
  }

  export type ResellerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    monthlyTurnover?: SortOrder
    totalTurnoverAllTime?: SortOrder
    discordUserId?: SortOrder
    telegramUserId?: SortOrder
    whatsappPhoneNumber?: SortOrder
    referrerId?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    monthlyTurnover?: SortOrder
    totalTurnoverAllTime?: SortOrder
    discordUserId?: SortOrder
    telegramUserId?: SortOrder
    whatsappPhoneNumber?: SortOrder
    referrerId?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellerSumOrderByAggregateInput = {
    balance?: SortOrder
    monthlyTurnover?: SortOrder
    totalTurnoverAllTime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumResellerTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellerTier | EnumResellerTierFieldRefInput<$PrismaModel>
    in?: $Enums.ResellerTier[] | ListEnumResellerTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellerTier[] | ListEnumResellerTierFieldRefInput<$PrismaModel>
    not?: NestedEnumResellerTierWithAggregatesFilter<$PrismaModel> | $Enums.ResellerTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResellerTierFilter<$PrismaModel>
    _max?: NestedEnumResellerTierFilter<$PrismaModel>
  }

  export type EnumResellerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellerStatus | EnumResellerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResellerStatus[] | ListEnumResellerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellerStatus[] | ListEnumResellerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResellerStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResellerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResellerStatusFilter<$PrismaModel>
    _max?: NestedEnumResellerStatusFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TierPriceListRelationFilter = {
    every?: TierPriceWhereInput
    some?: TierPriceWhereInput
    none?: TierPriceWhereInput
  }

  export type ProductPricingListRelationFilter = {
    every?: ProductPricingWhereInput
    some?: ProductPricingWhereInput
    none?: ProductPricingWhereInput
  }

  export type TierPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductPricingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    gameName?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    baseMarkup?: SortOrder
    active?: SortOrder
    maxStock?: SortOrder
    currentStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    costPrice?: SortOrder
    baseMarkup?: SortOrder
    maxStock?: SortOrder
    currentStock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    gameName?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    baseMarkup?: SortOrder
    active?: SortOrder
    maxStock?: SortOrder
    currentStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    gameName?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    costPrice?: SortOrder
    baseMarkup?: SortOrder
    active?: SortOrder
    maxStock?: SortOrder
    currentStock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    costPrice?: SortOrder
    baseMarkup?: SortOrder
    maxStock?: SortOrder
    currentStock?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type TierPriceProductIdTierCompoundUniqueInput = {
    productId: string
    tier: $Enums.ResellerTier
  }

  export type TierPriceCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tier?: SortOrder
    markup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TierPriceAvgOrderByAggregateInput = {
    markup?: SortOrder
  }

  export type TierPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tier?: SortOrder
    markup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TierPriceMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    tier?: SortOrder
    markup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TierPriceSumOrderByAggregateInput = {
    markup?: SortOrder
  }

  export type EnumPaymentChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentChannel | EnumPaymentChannelFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentChannel[] | ListEnumPaymentChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentChannel[] | ListEnumPaymentChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentChannelFilter<$PrismaModel> | $Enums.PaymentChannel
  }

  export type EnumDepositStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusFilter<$PrismaModel> | $Enums.DepositStatus
  }

  export type ResellerRelationFilter = {
    is?: ResellerWhereInput
    isNot?: ResellerWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    amount?: SortOrder
    paymentChannel?: SortOrder
    status?: SortOrder
    externalPaymentId?: SortOrder
    paymentUrl?: SortOrder
    qrCodeUrl?: SortOrder
    virtualAccountNumber?: SortOrder
    bankName?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    paidAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    amount?: SortOrder
    paymentChannel?: SortOrder
    status?: SortOrder
    externalPaymentId?: SortOrder
    paymentUrl?: SortOrder
    qrCodeUrl?: SortOrder
    virtualAccountNumber?: SortOrder
    bankName?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    paidAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    amount?: SortOrder
    paymentChannel?: SortOrder
    status?: SortOrder
    externalPaymentId?: SortOrder
    paymentUrl?: SortOrder
    qrCodeUrl?: SortOrder
    virtualAccountNumber?: SortOrder
    bankName?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    paidAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentChannel | EnumPaymentChannelFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentChannel[] | ListEnumPaymentChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentChannel[] | ListEnumPaymentChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentChannelWithAggregatesFilter<$PrismaModel> | $Enums.PaymentChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentChannelFilter<$PrismaModel>
    _max?: NestedEnumPaymentChannelFilter<$PrismaModel>
  }

  export type EnumDepositStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepositStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositStatusFilter<$PrismaModel>
    _max?: NestedEnumDepositStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    productId?: SortOrder
    targetGameId?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    resellerPrice?: SortOrder
    ppnAmount?: SortOrder
    marginAmount?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    externalRef?: SortOrder
    supplierOrderData?: SortOrder
    idempotencyKey?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    quantity?: SortOrder
    costPrice?: SortOrder
    resellerPrice?: SortOrder
    ppnAmount?: SortOrder
    marginAmount?: SortOrder
    profit?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    productId?: SortOrder
    targetGameId?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    resellerPrice?: SortOrder
    ppnAmount?: SortOrder
    marginAmount?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    externalRef?: SortOrder
    supplierOrderData?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    productId?: SortOrder
    targetGameId?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    resellerPrice?: SortOrder
    ppnAmount?: SortOrder
    marginAmount?: SortOrder
    profit?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    externalRef?: SortOrder
    supplierOrderData?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    quantity?: SortOrder
    costPrice?: SortOrder
    resellerPrice?: SortOrder
    ppnAmount?: SortOrder
    marginAmount?: SortOrder
    profit?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DepositNullableRelationFilter = {
    is?: DepositWhereInput | null
    isNot?: DepositWhereInput | null
  }

  export type OrderNullableRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance_before?: SortOrder
    balance_after?: SortOrder
    depositId?: SortOrder
    orderId?: SortOrder
    notes?: SortOrder
    adjustedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balance_before?: SortOrder
    balance_after?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance_before?: SortOrder
    balance_after?: SortOrder
    depositId?: SortOrder
    orderId?: SortOrder
    notes?: SortOrder
    adjustedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balance_before?: SortOrder
    balance_after?: SortOrder
    depositId?: SortOrder
    orderId?: SortOrder
    notes?: SortOrder
    adjustedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balance_before?: SortOrder
    balance_after?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    performedBy?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    performedBy?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    resellerId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    performedBy?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalOrders?: SortOrder
    successfulOrders?: SortOrder
    failedOrders?: SortOrder
    totalTurnover?: SortOrder
    totalCost?: SortOrder
    totalProfit?: SortOrder
    totalDeposits?: SortOrder
    depositAmount?: SortOrder
    newResellers?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySummaryAvgOrderByAggregateInput = {
    totalOrders?: SortOrder
    successfulOrders?: SortOrder
    failedOrders?: SortOrder
    totalTurnover?: SortOrder
    totalCost?: SortOrder
    totalProfit?: SortOrder
    totalDeposits?: SortOrder
    depositAmount?: SortOrder
    newResellers?: SortOrder
  }

  export type DailySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalOrders?: SortOrder
    successfulOrders?: SortOrder
    failedOrders?: SortOrder
    totalTurnover?: SortOrder
    totalCost?: SortOrder
    totalProfit?: SortOrder
    totalDeposits?: SortOrder
    depositAmount?: SortOrder
    newResellers?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalOrders?: SortOrder
    successfulOrders?: SortOrder
    failedOrders?: SortOrder
    totalTurnover?: SortOrder
    totalCost?: SortOrder
    totalProfit?: SortOrder
    totalDeposits?: SortOrder
    depositAmount?: SortOrder
    newResellers?: SortOrder
    createdAt?: SortOrder
  }

  export type DailySummarySumOrderByAggregateInput = {
    totalOrders?: SortOrder
    successfulOrders?: SortOrder
    failedOrders?: SortOrder
    totalTurnover?: SortOrder
    totalCost?: SortOrder
    totalProfit?: SortOrder
    totalDeposits?: SortOrder
    depositAmount?: SortOrder
    newResellers?: SortOrder
  }

  export type MonthlySummaryYearMonthCompoundUniqueInput = {
    year: number
    month: number
  }

  export type MonthlySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalOrders?: SortOrder
    totalTurnover?: SortOrder
    totalProfit?: SortOrder
    averageOrderValue?: SortOrder
    totalDeposits?: SortOrder
    totalDepositAmount?: SortOrder
    taxableIncome?: SortOrder
    estimatedTax?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlySummaryAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    totalOrders?: SortOrder
    totalTurnover?: SortOrder
    totalProfit?: SortOrder
    averageOrderValue?: SortOrder
    totalDeposits?: SortOrder
    totalDepositAmount?: SortOrder
    taxableIncome?: SortOrder
    estimatedTax?: SortOrder
  }

  export type MonthlySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalOrders?: SortOrder
    totalTurnover?: SortOrder
    totalProfit?: SortOrder
    averageOrderValue?: SortOrder
    totalDeposits?: SortOrder
    totalDepositAmount?: SortOrder
    taxableIncome?: SortOrder
    estimatedTax?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalOrders?: SortOrder
    totalTurnover?: SortOrder
    totalProfit?: SortOrder
    averageOrderValue?: SortOrder
    totalDeposits?: SortOrder
    totalDepositAmount?: SortOrder
    taxableIncome?: SortOrder
    estimatedTax?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlySummarySumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    totalOrders?: SortOrder
    totalTurnover?: SortOrder
    totalProfit?: SortOrder
    averageOrderValue?: SortOrder
    totalDeposits?: SortOrder
    totalDepositAmount?: SortOrder
    taxableIncome?: SortOrder
    estimatedTax?: SortOrder
  }

  export type WebhookLogCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    ipAddress?: SortOrder
    isValid?: SortOrder
    error?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    ipAddress?: SortOrder
    isValid?: SortOrder
    error?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    ipAddress?: SortOrder
    isValid?: SortOrder
    error?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPricingCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    denomination?: SortOrder
    supplierPrice?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductPricingAvgOrderByAggregateInput = {
    denomination?: SortOrder
    supplierPrice?: SortOrder
  }

  export type ProductPricingMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    denomination?: SortOrder
    supplierPrice?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductPricingMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    denomination?: SortOrder
    supplierPrice?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductPricingSumOrderByAggregateInput = {
    denomination?: SortOrder
    supplierPrice?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SupplierProductListRelationFilter = {
    every?: SupplierProductWhereInput
    some?: SupplierProductWhereInput
    none?: SupplierProductWhereInput
  }

  export type SupplierHealthMetricListRelationFilter = {
    every?: SupplierHealthMetricWhereInput
    some?: SupplierHealthMetricWhereInput
    none?: SupplierHealthMetricWhereInput
  }

  export type SupplierProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierHealthMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierPanelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    healthStatus?: SortOrder
    successRate?: SortOrder
    avgResponseTimeMs?: SortOrder
    lastHealthCheck?: SortOrder
    totalRequests?: SortOrder
    totalSuccesses?: SortOrder
    totalFailures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierPanelAvgOrderByAggregateInput = {
    priority?: SortOrder
    successRate?: SortOrder
    avgResponseTimeMs?: SortOrder
    totalRequests?: SortOrder
    totalSuccesses?: SortOrder
    totalFailures?: SortOrder
  }

  export type SupplierPanelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    healthStatus?: SortOrder
    successRate?: SortOrder
    avgResponseTimeMs?: SortOrder
    lastHealthCheck?: SortOrder
    totalRequests?: SortOrder
    totalSuccesses?: SortOrder
    totalFailures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierPanelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    healthStatus?: SortOrder
    successRate?: SortOrder
    avgResponseTimeMs?: SortOrder
    lastHealthCheck?: SortOrder
    totalRequests?: SortOrder
    totalSuccesses?: SortOrder
    totalFailures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierPanelSumOrderByAggregateInput = {
    priority?: SortOrder
    successRate?: SortOrder
    avgResponseTimeMs?: SortOrder
    totalRequests?: SortOrder
    totalSuccesses?: SortOrder
    totalFailures?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SupplierPanelRelationFilter = {
    is?: SupplierPanelWhereInput
    isNot?: SupplierPanelWhereInput
  }

  export type SupplierProductPanelIdProductCodeCompoundUniqueInput = {
    panelId: string
    productCode: string
  }

  export type SupplierProductCountOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    productCode?: SortOrder
    isAvailable?: SortOrder
    lastPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierProductAvgOrderByAggregateInput = {
    lastPrice?: SortOrder
  }

  export type SupplierProductMaxOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    productCode?: SortOrder
    isAvailable?: SortOrder
    lastPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierProductMinOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    productCode?: SortOrder
    isAvailable?: SortOrder
    lastPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierProductSumOrderByAggregateInput = {
    lastPrice?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type SupplierHealthMetricCountOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    responseTimeMs?: SortOrder
    isHealthy?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierHealthMetricAvgOrderByAggregateInput = {
    responseTimeMs?: SortOrder
  }

  export type SupplierHealthMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    responseTimeMs?: SortOrder
    isHealthy?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierHealthMetricMinOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    responseTimeMs?: SortOrder
    isHealthy?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierHealthMetricSumOrderByAggregateInput = {
    responseTimeMs?: SortOrder
  }

  export type ResellerCreateNestedOneWithoutReferralsInput = {
    create?: XOR<ResellerCreateWithoutReferralsInput, ResellerUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: ResellerCreateOrConnectWithoutReferralsInput
    connect?: ResellerWhereUniqueInput
  }

  export type ResellerCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ResellerCreateWithoutReferrerInput, ResellerUncheckedCreateWithoutReferrerInput> | ResellerCreateWithoutReferrerInput[] | ResellerUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ResellerCreateOrConnectWithoutReferrerInput | ResellerCreateOrConnectWithoutReferrerInput[]
    createMany?: ResellerCreateManyReferrerInputEnvelope
    connect?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutResellerInput = {
    create?: XOR<OrderCreateWithoutResellerInput, OrderUncheckedCreateWithoutResellerInput> | OrderCreateWithoutResellerInput[] | OrderUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutResellerInput | OrderCreateOrConnectWithoutResellerInput[]
    createMany?: OrderCreateManyResellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DepositCreateNestedManyWithoutResellerInput = {
    create?: XOR<DepositCreateWithoutResellerInput, DepositUncheckedCreateWithoutResellerInput> | DepositCreateWithoutResellerInput[] | DepositUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutResellerInput | DepositCreateOrConnectWithoutResellerInput[]
    createMany?: DepositCreateManyResellerInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutResellerInput = {
    create?: XOR<AuditLogCreateWithoutResellerInput, AuditLogUncheckedCreateWithoutResellerInput> | AuditLogCreateWithoutResellerInput[] | AuditLogUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutResellerInput | AuditLogCreateOrConnectWithoutResellerInput[]
    createMany?: AuditLogCreateManyResellerInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ResellerUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ResellerCreateWithoutReferrerInput, ResellerUncheckedCreateWithoutReferrerInput> | ResellerCreateWithoutReferrerInput[] | ResellerUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ResellerCreateOrConnectWithoutReferrerInput | ResellerCreateOrConnectWithoutReferrerInput[]
    createMany?: ResellerCreateManyReferrerInputEnvelope
    connect?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutResellerInput = {
    create?: XOR<OrderCreateWithoutResellerInput, OrderUncheckedCreateWithoutResellerInput> | OrderCreateWithoutResellerInput[] | OrderUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutResellerInput | OrderCreateOrConnectWithoutResellerInput[]
    createMany?: OrderCreateManyResellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutResellerInput = {
    create?: XOR<DepositCreateWithoutResellerInput, DepositUncheckedCreateWithoutResellerInput> | DepositCreateWithoutResellerInput[] | DepositUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutResellerInput | DepositCreateOrConnectWithoutResellerInput[]
    createMany?: DepositCreateManyResellerInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutResellerInput = {
    create?: XOR<AuditLogCreateWithoutResellerInput, AuditLogUncheckedCreateWithoutResellerInput> | AuditLogCreateWithoutResellerInput[] | AuditLogUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutResellerInput | AuditLogCreateOrConnectWithoutResellerInput[]
    createMany?: AuditLogCreateManyResellerInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumResellerTierFieldUpdateOperationsInput = {
    set?: $Enums.ResellerTier
  }

  export type EnumResellerStatusFieldUpdateOperationsInput = {
    set?: $Enums.ResellerStatus
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResellerUpdateOneWithoutReferralsNestedInput = {
    create?: XOR<ResellerCreateWithoutReferralsInput, ResellerUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: ResellerCreateOrConnectWithoutReferralsInput
    upsert?: ResellerUpsertWithoutReferralsInput
    disconnect?: ResellerWhereInput | boolean
    delete?: ResellerWhereInput | boolean
    connect?: ResellerWhereUniqueInput
    update?: XOR<XOR<ResellerUpdateToOneWithWhereWithoutReferralsInput, ResellerUpdateWithoutReferralsInput>, ResellerUncheckedUpdateWithoutReferralsInput>
  }

  export type ResellerUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ResellerCreateWithoutReferrerInput, ResellerUncheckedCreateWithoutReferrerInput> | ResellerCreateWithoutReferrerInput[] | ResellerUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ResellerCreateOrConnectWithoutReferrerInput | ResellerCreateOrConnectWithoutReferrerInput[]
    upsert?: ResellerUpsertWithWhereUniqueWithoutReferrerInput | ResellerUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ResellerCreateManyReferrerInputEnvelope
    set?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
    disconnect?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
    delete?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
    connect?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
    update?: ResellerUpdateWithWhereUniqueWithoutReferrerInput | ResellerUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ResellerUpdateManyWithWhereWithoutReferrerInput | ResellerUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ResellerScalarWhereInput | ResellerScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutResellerNestedInput = {
    create?: XOR<OrderCreateWithoutResellerInput, OrderUncheckedCreateWithoutResellerInput> | OrderCreateWithoutResellerInput[] | OrderUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutResellerInput | OrderCreateOrConnectWithoutResellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutResellerInput | OrderUpsertWithWhereUniqueWithoutResellerInput[]
    createMany?: OrderCreateManyResellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutResellerInput | OrderUpdateWithWhereUniqueWithoutResellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutResellerInput | OrderUpdateManyWithWhereWithoutResellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DepositUpdateManyWithoutResellerNestedInput = {
    create?: XOR<DepositCreateWithoutResellerInput, DepositUncheckedCreateWithoutResellerInput> | DepositCreateWithoutResellerInput[] | DepositUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutResellerInput | DepositCreateOrConnectWithoutResellerInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutResellerInput | DepositUpsertWithWhereUniqueWithoutResellerInput[]
    createMany?: DepositCreateManyResellerInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutResellerInput | DepositUpdateWithWhereUniqueWithoutResellerInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutResellerInput | DepositUpdateManyWithWhereWithoutResellerInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutResellerNestedInput = {
    create?: XOR<AuditLogCreateWithoutResellerInput, AuditLogUncheckedCreateWithoutResellerInput> | AuditLogCreateWithoutResellerInput[] | AuditLogUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutResellerInput | AuditLogCreateOrConnectWithoutResellerInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutResellerInput | AuditLogUpsertWithWhereUniqueWithoutResellerInput[]
    createMany?: AuditLogCreateManyResellerInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutResellerInput | AuditLogUpdateWithWhereUniqueWithoutResellerInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutResellerInput | AuditLogUpdateManyWithWhereWithoutResellerInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ResellerUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ResellerCreateWithoutReferrerInput, ResellerUncheckedCreateWithoutReferrerInput> | ResellerCreateWithoutReferrerInput[] | ResellerUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ResellerCreateOrConnectWithoutReferrerInput | ResellerCreateOrConnectWithoutReferrerInput[]
    upsert?: ResellerUpsertWithWhereUniqueWithoutReferrerInput | ResellerUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ResellerCreateManyReferrerInputEnvelope
    set?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
    disconnect?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
    delete?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
    connect?: ResellerWhereUniqueInput | ResellerWhereUniqueInput[]
    update?: ResellerUpdateWithWhereUniqueWithoutReferrerInput | ResellerUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ResellerUpdateManyWithWhereWithoutReferrerInput | ResellerUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ResellerScalarWhereInput | ResellerScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutResellerNestedInput = {
    create?: XOR<OrderCreateWithoutResellerInput, OrderUncheckedCreateWithoutResellerInput> | OrderCreateWithoutResellerInput[] | OrderUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutResellerInput | OrderCreateOrConnectWithoutResellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutResellerInput | OrderUpsertWithWhereUniqueWithoutResellerInput[]
    createMany?: OrderCreateManyResellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutResellerInput | OrderUpdateWithWhereUniqueWithoutResellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutResellerInput | OrderUpdateManyWithWhereWithoutResellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutResellerNestedInput = {
    create?: XOR<DepositCreateWithoutResellerInput, DepositUncheckedCreateWithoutResellerInput> | DepositCreateWithoutResellerInput[] | DepositUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutResellerInput | DepositCreateOrConnectWithoutResellerInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutResellerInput | DepositUpsertWithWhereUniqueWithoutResellerInput[]
    createMany?: DepositCreateManyResellerInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutResellerInput | DepositUpdateWithWhereUniqueWithoutResellerInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutResellerInput | DepositUpdateManyWithWhereWithoutResellerInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutResellerNestedInput = {
    create?: XOR<AuditLogCreateWithoutResellerInput, AuditLogUncheckedCreateWithoutResellerInput> | AuditLogCreateWithoutResellerInput[] | AuditLogUncheckedCreateWithoutResellerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutResellerInput | AuditLogCreateOrConnectWithoutResellerInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutResellerInput | AuditLogUpsertWithWhereUniqueWithoutResellerInput[]
    createMany?: AuditLogCreateManyResellerInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutResellerInput | AuditLogUpdateWithWhereUniqueWithoutResellerInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutResellerInput | AuditLogUpdateManyWithWhereWithoutResellerInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TierPriceCreateNestedManyWithoutProductInput = {
    create?: XOR<TierPriceCreateWithoutProductInput, TierPriceUncheckedCreateWithoutProductInput> | TierPriceCreateWithoutProductInput[] | TierPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TierPriceCreateOrConnectWithoutProductInput | TierPriceCreateOrConnectWithoutProductInput[]
    createMany?: TierPriceCreateManyProductInputEnvelope
    connect?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
  }

  export type ProductPricingCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPricingCreateWithoutProductInput, ProductPricingUncheckedCreateWithoutProductInput> | ProductPricingCreateWithoutProductInput[] | ProductPricingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPricingCreateOrConnectWithoutProductInput | ProductPricingCreateOrConnectWithoutProductInput[]
    createMany?: ProductPricingCreateManyProductInputEnvelope
    connect?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TierPriceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TierPriceCreateWithoutProductInput, TierPriceUncheckedCreateWithoutProductInput> | TierPriceCreateWithoutProductInput[] | TierPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TierPriceCreateOrConnectWithoutProductInput | TierPriceCreateOrConnectWithoutProductInput[]
    createMany?: TierPriceCreateManyProductInputEnvelope
    connect?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
  }

  export type ProductPricingUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPricingCreateWithoutProductInput, ProductPricingUncheckedCreateWithoutProductInput> | ProductPricingCreateWithoutProductInput[] | ProductPricingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPricingCreateOrConnectWithoutProductInput | ProductPricingCreateOrConnectWithoutProductInput[]
    createMany?: ProductPricingCreateManyProductInputEnvelope
    connect?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput | OrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductInput | OrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput | OrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TierPriceUpdateManyWithoutProductNestedInput = {
    create?: XOR<TierPriceCreateWithoutProductInput, TierPriceUncheckedCreateWithoutProductInput> | TierPriceCreateWithoutProductInput[] | TierPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TierPriceCreateOrConnectWithoutProductInput | TierPriceCreateOrConnectWithoutProductInput[]
    upsert?: TierPriceUpsertWithWhereUniqueWithoutProductInput | TierPriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TierPriceCreateManyProductInputEnvelope
    set?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
    disconnect?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
    delete?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
    connect?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
    update?: TierPriceUpdateWithWhereUniqueWithoutProductInput | TierPriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TierPriceUpdateManyWithWhereWithoutProductInput | TierPriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TierPriceScalarWhereInput | TierPriceScalarWhereInput[]
  }

  export type ProductPricingUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPricingCreateWithoutProductInput, ProductPricingUncheckedCreateWithoutProductInput> | ProductPricingCreateWithoutProductInput[] | ProductPricingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPricingCreateOrConnectWithoutProductInput | ProductPricingCreateOrConnectWithoutProductInput[]
    upsert?: ProductPricingUpsertWithWhereUniqueWithoutProductInput | ProductPricingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPricingCreateManyProductInputEnvelope
    set?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
    disconnect?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
    delete?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
    connect?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
    update?: ProductPricingUpdateWithWhereUniqueWithoutProductInput | ProductPricingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPricingUpdateManyWithWhereWithoutProductInput | ProductPricingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPricingScalarWhereInput | ProductPricingScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput | OrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductInput | OrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput | OrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TierPriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TierPriceCreateWithoutProductInput, TierPriceUncheckedCreateWithoutProductInput> | TierPriceCreateWithoutProductInput[] | TierPriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TierPriceCreateOrConnectWithoutProductInput | TierPriceCreateOrConnectWithoutProductInput[]
    upsert?: TierPriceUpsertWithWhereUniqueWithoutProductInput | TierPriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TierPriceCreateManyProductInputEnvelope
    set?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
    disconnect?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
    delete?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
    connect?: TierPriceWhereUniqueInput | TierPriceWhereUniqueInput[]
    update?: TierPriceUpdateWithWhereUniqueWithoutProductInput | TierPriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TierPriceUpdateManyWithWhereWithoutProductInput | TierPriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TierPriceScalarWhereInput | TierPriceScalarWhereInput[]
  }

  export type ProductPricingUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPricingCreateWithoutProductInput, ProductPricingUncheckedCreateWithoutProductInput> | ProductPricingCreateWithoutProductInput[] | ProductPricingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPricingCreateOrConnectWithoutProductInput | ProductPricingCreateOrConnectWithoutProductInput[]
    upsert?: ProductPricingUpsertWithWhereUniqueWithoutProductInput | ProductPricingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPricingCreateManyProductInputEnvelope
    set?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
    disconnect?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
    delete?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
    connect?: ProductPricingWhereUniqueInput | ProductPricingWhereUniqueInput[]
    update?: ProductPricingUpdateWithWhereUniqueWithoutProductInput | ProductPricingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPricingUpdateManyWithWhereWithoutProductInput | ProductPricingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPricingScalarWhereInput | ProductPricingScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutTierPricesInput = {
    create?: XOR<ProductCreateWithoutTierPricesInput, ProductUncheckedCreateWithoutTierPricesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTierPricesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutTierPricesNestedInput = {
    create?: XOR<ProductCreateWithoutTierPricesInput, ProductUncheckedCreateWithoutTierPricesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTierPricesInput
    upsert?: ProductUpsertWithoutTierPricesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTierPricesInput, ProductUpdateWithoutTierPricesInput>, ProductUncheckedUpdateWithoutTierPricesInput>
  }

  export type ResellerCreateNestedOneWithoutDepositsInput = {
    create?: XOR<ResellerCreateWithoutDepositsInput, ResellerUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: ResellerCreateOrConnectWithoutDepositsInput
    connect?: ResellerWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutDepositInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput> | TransactionCreateWithoutDepositInput[] | TransactionUncheckedCreateWithoutDepositInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput | TransactionCreateOrConnectWithoutDepositInput[]
    createMany?: TransactionCreateManyDepositInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutDepositInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput> | TransactionCreateWithoutDepositInput[] | TransactionUncheckedCreateWithoutDepositInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput | TransactionCreateOrConnectWithoutDepositInput[]
    createMany?: TransactionCreateManyDepositInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumPaymentChannelFieldUpdateOperationsInput = {
    set?: $Enums.PaymentChannel
  }

  export type EnumDepositStatusFieldUpdateOperationsInput = {
    set?: $Enums.DepositStatus
  }

  export type ResellerUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<ResellerCreateWithoutDepositsInput, ResellerUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: ResellerCreateOrConnectWithoutDepositsInput
    upsert?: ResellerUpsertWithoutDepositsInput
    connect?: ResellerWhereUniqueInput
    update?: XOR<XOR<ResellerUpdateToOneWithWhereWithoutDepositsInput, ResellerUpdateWithoutDepositsInput>, ResellerUncheckedUpdateWithoutDepositsInput>
  }

  export type TransactionUpdateManyWithoutDepositNestedInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput> | TransactionCreateWithoutDepositInput[] | TransactionUncheckedCreateWithoutDepositInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput | TransactionCreateOrConnectWithoutDepositInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDepositInput | TransactionUpsertWithWhereUniqueWithoutDepositInput[]
    createMany?: TransactionCreateManyDepositInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDepositInput | TransactionUpdateWithWhereUniqueWithoutDepositInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDepositInput | TransactionUpdateManyWithWhereWithoutDepositInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutDepositNestedInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput> | TransactionCreateWithoutDepositInput[] | TransactionUncheckedCreateWithoutDepositInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput | TransactionCreateOrConnectWithoutDepositInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDepositInput | TransactionUpsertWithWhereUniqueWithoutDepositInput[]
    createMany?: TransactionCreateManyDepositInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDepositInput | TransactionUpdateWithWhereUniqueWithoutDepositInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDepositInput | TransactionUpdateManyWithWhereWithoutDepositInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ResellerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ResellerCreateWithoutOrdersInput, ResellerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ResellerCreateOrConnectWithoutOrdersInput
    connect?: ResellerWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutOrderInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type ResellerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ResellerCreateWithoutOrdersInput, ResellerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ResellerCreateOrConnectWithoutOrdersInput
    upsert?: ResellerUpsertWithoutOrdersInput
    connect?: ResellerWhereUniqueInput
    update?: XOR<XOR<ResellerUpdateToOneWithWhereWithoutOrdersInput, ResellerUpdateWithoutOrdersInput>, ResellerUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type TransactionUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOrderInput | TransactionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOrderInput | TransactionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOrderInput | TransactionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOrderInput | TransactionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOrderInput | TransactionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOrderInput | TransactionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DepositCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<DepositCreateWithoutTransactionsInput, DepositUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DepositCreateOrConnectWithoutTransactionsInput
    connect?: DepositWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTransactionsInput
    connect?: OrderWhereUniqueInput
  }

  export type DepositUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<DepositCreateWithoutTransactionsInput, DepositUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: DepositCreateOrConnectWithoutTransactionsInput
    upsert?: DepositUpsertWithoutTransactionsInput
    disconnect?: DepositWhereInput | boolean
    delete?: DepositWhereInput | boolean
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutTransactionsInput, DepositUpdateWithoutTransactionsInput>, DepositUncheckedUpdateWithoutTransactionsInput>
  }

  export type OrderUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTransactionsInput
    upsert?: OrderUpsertWithoutTransactionsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutTransactionsInput, OrderUpdateWithoutTransactionsInput>, OrderUncheckedUpdateWithoutTransactionsInput>
  }

  export type ResellerCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ResellerCreateWithoutAuditLogsInput, ResellerUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ResellerCreateOrConnectWithoutAuditLogsInput
    connect?: ResellerWhereUniqueInput
  }

  export type ResellerUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<ResellerCreateWithoutAuditLogsInput, ResellerUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ResellerCreateOrConnectWithoutAuditLogsInput
    upsert?: ResellerUpsertWithoutAuditLogsInput
    disconnect?: ResellerWhereInput | boolean
    delete?: ResellerWhereInput | boolean
    connect?: ResellerWhereUniqueInput
    update?: XOR<XOR<ResellerUpdateToOneWithWhereWithoutAuditLogsInput, ResellerUpdateWithoutAuditLogsInput>, ResellerUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ProductCreateNestedOneWithoutPricingHistoryInput = {
    create?: XOR<ProductCreateWithoutPricingHistoryInput, ProductUncheckedCreateWithoutPricingHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricingHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPricingHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutPricingHistoryInput, ProductUncheckedCreateWithoutPricingHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricingHistoryInput
    upsert?: ProductUpsertWithoutPricingHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPricingHistoryInput, ProductUpdateWithoutPricingHistoryInput>, ProductUncheckedUpdateWithoutPricingHistoryInput>
  }

  export type SupplierProductCreateNestedManyWithoutPanelInput = {
    create?: XOR<SupplierProductCreateWithoutPanelInput, SupplierProductUncheckedCreateWithoutPanelInput> | SupplierProductCreateWithoutPanelInput[] | SupplierProductUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: SupplierProductCreateOrConnectWithoutPanelInput | SupplierProductCreateOrConnectWithoutPanelInput[]
    createMany?: SupplierProductCreateManyPanelInputEnvelope
    connect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
  }

  export type SupplierHealthMetricCreateNestedManyWithoutPanelInput = {
    create?: XOR<SupplierHealthMetricCreateWithoutPanelInput, SupplierHealthMetricUncheckedCreateWithoutPanelInput> | SupplierHealthMetricCreateWithoutPanelInput[] | SupplierHealthMetricUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: SupplierHealthMetricCreateOrConnectWithoutPanelInput | SupplierHealthMetricCreateOrConnectWithoutPanelInput[]
    createMany?: SupplierHealthMetricCreateManyPanelInputEnvelope
    connect?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
  }

  export type SupplierProductUncheckedCreateNestedManyWithoutPanelInput = {
    create?: XOR<SupplierProductCreateWithoutPanelInput, SupplierProductUncheckedCreateWithoutPanelInput> | SupplierProductCreateWithoutPanelInput[] | SupplierProductUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: SupplierProductCreateOrConnectWithoutPanelInput | SupplierProductCreateOrConnectWithoutPanelInput[]
    createMany?: SupplierProductCreateManyPanelInputEnvelope
    connect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
  }

  export type SupplierHealthMetricUncheckedCreateNestedManyWithoutPanelInput = {
    create?: XOR<SupplierHealthMetricCreateWithoutPanelInput, SupplierHealthMetricUncheckedCreateWithoutPanelInput> | SupplierHealthMetricCreateWithoutPanelInput[] | SupplierHealthMetricUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: SupplierHealthMetricCreateOrConnectWithoutPanelInput | SupplierHealthMetricCreateOrConnectWithoutPanelInput[]
    createMany?: SupplierHealthMetricCreateManyPanelInputEnvelope
    connect?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplierProductUpdateManyWithoutPanelNestedInput = {
    create?: XOR<SupplierProductCreateWithoutPanelInput, SupplierProductUncheckedCreateWithoutPanelInput> | SupplierProductCreateWithoutPanelInput[] | SupplierProductUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: SupplierProductCreateOrConnectWithoutPanelInput | SupplierProductCreateOrConnectWithoutPanelInput[]
    upsert?: SupplierProductUpsertWithWhereUniqueWithoutPanelInput | SupplierProductUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: SupplierProductCreateManyPanelInputEnvelope
    set?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    disconnect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    delete?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    connect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    update?: SupplierProductUpdateWithWhereUniqueWithoutPanelInput | SupplierProductUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: SupplierProductUpdateManyWithWhereWithoutPanelInput | SupplierProductUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: SupplierProductScalarWhereInput | SupplierProductScalarWhereInput[]
  }

  export type SupplierHealthMetricUpdateManyWithoutPanelNestedInput = {
    create?: XOR<SupplierHealthMetricCreateWithoutPanelInput, SupplierHealthMetricUncheckedCreateWithoutPanelInput> | SupplierHealthMetricCreateWithoutPanelInput[] | SupplierHealthMetricUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: SupplierHealthMetricCreateOrConnectWithoutPanelInput | SupplierHealthMetricCreateOrConnectWithoutPanelInput[]
    upsert?: SupplierHealthMetricUpsertWithWhereUniqueWithoutPanelInput | SupplierHealthMetricUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: SupplierHealthMetricCreateManyPanelInputEnvelope
    set?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
    disconnect?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
    delete?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
    connect?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
    update?: SupplierHealthMetricUpdateWithWhereUniqueWithoutPanelInput | SupplierHealthMetricUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: SupplierHealthMetricUpdateManyWithWhereWithoutPanelInput | SupplierHealthMetricUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: SupplierHealthMetricScalarWhereInput | SupplierHealthMetricScalarWhereInput[]
  }

  export type SupplierProductUncheckedUpdateManyWithoutPanelNestedInput = {
    create?: XOR<SupplierProductCreateWithoutPanelInput, SupplierProductUncheckedCreateWithoutPanelInput> | SupplierProductCreateWithoutPanelInput[] | SupplierProductUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: SupplierProductCreateOrConnectWithoutPanelInput | SupplierProductCreateOrConnectWithoutPanelInput[]
    upsert?: SupplierProductUpsertWithWhereUniqueWithoutPanelInput | SupplierProductUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: SupplierProductCreateManyPanelInputEnvelope
    set?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    disconnect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    delete?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    connect?: SupplierProductWhereUniqueInput | SupplierProductWhereUniqueInput[]
    update?: SupplierProductUpdateWithWhereUniqueWithoutPanelInput | SupplierProductUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: SupplierProductUpdateManyWithWhereWithoutPanelInput | SupplierProductUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: SupplierProductScalarWhereInput | SupplierProductScalarWhereInput[]
  }

  export type SupplierHealthMetricUncheckedUpdateManyWithoutPanelNestedInput = {
    create?: XOR<SupplierHealthMetricCreateWithoutPanelInput, SupplierHealthMetricUncheckedCreateWithoutPanelInput> | SupplierHealthMetricCreateWithoutPanelInput[] | SupplierHealthMetricUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: SupplierHealthMetricCreateOrConnectWithoutPanelInput | SupplierHealthMetricCreateOrConnectWithoutPanelInput[]
    upsert?: SupplierHealthMetricUpsertWithWhereUniqueWithoutPanelInput | SupplierHealthMetricUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: SupplierHealthMetricCreateManyPanelInputEnvelope
    set?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
    disconnect?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
    delete?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
    connect?: SupplierHealthMetricWhereUniqueInput | SupplierHealthMetricWhereUniqueInput[]
    update?: SupplierHealthMetricUpdateWithWhereUniqueWithoutPanelInput | SupplierHealthMetricUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: SupplierHealthMetricUpdateManyWithWhereWithoutPanelInput | SupplierHealthMetricUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: SupplierHealthMetricScalarWhereInput | SupplierHealthMetricScalarWhereInput[]
  }

  export type SupplierPanelCreateNestedOneWithoutProductsInput = {
    create?: XOR<SupplierPanelCreateWithoutProductsInput, SupplierPanelUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplierPanelCreateOrConnectWithoutProductsInput
    connect?: SupplierPanelWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type SupplierPanelUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SupplierPanelCreateWithoutProductsInput, SupplierPanelUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplierPanelCreateOrConnectWithoutProductsInput
    upsert?: SupplierPanelUpsertWithoutProductsInput
    connect?: SupplierPanelWhereUniqueInput
    update?: XOR<XOR<SupplierPanelUpdateToOneWithWhereWithoutProductsInput, SupplierPanelUpdateWithoutProductsInput>, SupplierPanelUncheckedUpdateWithoutProductsInput>
  }

  export type SupplierPanelCreateNestedOneWithoutHealthMetricsInput = {
    create?: XOR<SupplierPanelCreateWithoutHealthMetricsInput, SupplierPanelUncheckedCreateWithoutHealthMetricsInput>
    connectOrCreate?: SupplierPanelCreateOrConnectWithoutHealthMetricsInput
    connect?: SupplierPanelWhereUniqueInput
  }

  export type SupplierPanelUpdateOneRequiredWithoutHealthMetricsNestedInput = {
    create?: XOR<SupplierPanelCreateWithoutHealthMetricsInput, SupplierPanelUncheckedCreateWithoutHealthMetricsInput>
    connectOrCreate?: SupplierPanelCreateOrConnectWithoutHealthMetricsInput
    upsert?: SupplierPanelUpsertWithoutHealthMetricsInput
    connect?: SupplierPanelWhereUniqueInput
    update?: XOR<XOR<SupplierPanelUpdateToOneWithWhereWithoutHealthMetricsInput, SupplierPanelUpdateWithoutHealthMetricsInput>, SupplierPanelUncheckedUpdateWithoutHealthMetricsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumResellerTierFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellerTier | EnumResellerTierFieldRefInput<$PrismaModel>
    in?: $Enums.ResellerTier[] | ListEnumResellerTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellerTier[] | ListEnumResellerTierFieldRefInput<$PrismaModel>
    not?: NestedEnumResellerTierFilter<$PrismaModel> | $Enums.ResellerTier
  }

  export type NestedEnumResellerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellerStatus | EnumResellerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResellerStatus[] | ListEnumResellerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellerStatus[] | ListEnumResellerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResellerStatusFilter<$PrismaModel> | $Enums.ResellerStatus
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumResellerTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellerTier | EnumResellerTierFieldRefInput<$PrismaModel>
    in?: $Enums.ResellerTier[] | ListEnumResellerTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellerTier[] | ListEnumResellerTierFieldRefInput<$PrismaModel>
    not?: NestedEnumResellerTierWithAggregatesFilter<$PrismaModel> | $Enums.ResellerTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResellerTierFilter<$PrismaModel>
    _max?: NestedEnumResellerTierFilter<$PrismaModel>
  }

  export type NestedEnumResellerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellerStatus | EnumResellerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResellerStatus[] | ListEnumResellerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellerStatus[] | ListEnumResellerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResellerStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResellerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResellerStatusFilter<$PrismaModel>
    _max?: NestedEnumResellerStatusFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentChannel | EnumPaymentChannelFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentChannel[] | ListEnumPaymentChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentChannel[] | ListEnumPaymentChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentChannelFilter<$PrismaModel> | $Enums.PaymentChannel
  }

  export type NestedEnumDepositStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusFilter<$PrismaModel> | $Enums.DepositStatus
  }

  export type NestedEnumPaymentChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentChannel | EnumPaymentChannelFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentChannel[] | ListEnumPaymentChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentChannel[] | ListEnumPaymentChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentChannelWithAggregatesFilter<$PrismaModel> | $Enums.PaymentChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentChannelFilter<$PrismaModel>
    _max?: NestedEnumPaymentChannelFilter<$PrismaModel>
  }

  export type NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositStatus | EnumDepositStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositStatus[] | ListEnumDepositStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepositStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositStatusFilter<$PrismaModel>
    _max?: NestedEnumDepositStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ResellerCreateWithoutReferralsInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrer?: ResellerCreateNestedOneWithoutReferralsInput
    orders?: OrderCreateNestedManyWithoutResellerInput
    deposits?: DepositCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogCreateNestedManyWithoutResellerInput
  }

  export type ResellerUncheckedCreateWithoutReferralsInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    referrerId?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutResellerInput
    deposits?: DepositUncheckedCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutResellerInput
  }

  export type ResellerCreateOrConnectWithoutReferralsInput = {
    where: ResellerWhereUniqueInput
    create: XOR<ResellerCreateWithoutReferralsInput, ResellerUncheckedCreateWithoutReferralsInput>
  }

  export type ResellerCreateWithoutReferrerInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: ResellerCreateNestedManyWithoutReferrerInput
    orders?: OrderCreateNestedManyWithoutResellerInput
    deposits?: DepositCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogCreateNestedManyWithoutResellerInput
  }

  export type ResellerUncheckedCreateWithoutReferrerInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: ResellerUncheckedCreateNestedManyWithoutReferrerInput
    orders?: OrderUncheckedCreateNestedManyWithoutResellerInput
    deposits?: DepositUncheckedCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutResellerInput
  }

  export type ResellerCreateOrConnectWithoutReferrerInput = {
    where: ResellerWhereUniqueInput
    create: XOR<ResellerCreateWithoutReferrerInput, ResellerUncheckedCreateWithoutReferrerInput>
  }

  export type ResellerCreateManyReferrerInputEnvelope = {
    data: ResellerCreateManyReferrerInput | ResellerCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutResellerInput = {
    id?: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutResellerInput = {
    id?: string
    productId: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutResellerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutResellerInput, OrderUncheckedCreateWithoutResellerInput>
  }

  export type OrderCreateManyResellerInputEnvelope = {
    data: OrderCreateManyResellerInput | OrderCreateManyResellerInput[]
    skipDuplicates?: boolean
  }

  export type DepositCreateWithoutResellerInput = {
    id?: string
    amount: bigint | number
    paymentChannel?: $Enums.PaymentChannel
    status?: $Enums.DepositStatus
    externalPaymentId?: string | null
    paymentUrl?: string | null
    qrCodeUrl?: string | null
    virtualAccountNumber?: string | null
    bankName?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    paidAt?: Date | string | null
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutResellerInput = {
    id?: string
    amount: bigint | number
    paymentChannel?: $Enums.PaymentChannel
    status?: $Enums.DepositStatus
    externalPaymentId?: string | null
    paymentUrl?: string | null
    qrCodeUrl?: string | null
    virtualAccountNumber?: string | null
    bankName?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    paidAt?: Date | string | null
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutDepositInput
  }

  export type DepositCreateOrConnectWithoutResellerInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutResellerInput, DepositUncheckedCreateWithoutResellerInput>
  }

  export type DepositCreateManyResellerInputEnvelope = {
    data: DepositCreateManyResellerInput | DepositCreateManyResellerInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutResellerInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    oldValue?: string | null
    newValue?: string | null
    performedBy?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutResellerInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    oldValue?: string | null
    newValue?: string | null
    performedBy?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutResellerInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutResellerInput, AuditLogUncheckedCreateWithoutResellerInput>
  }

  export type AuditLogCreateManyResellerInputEnvelope = {
    data: AuditLogCreateManyResellerInput | AuditLogCreateManyResellerInput[]
    skipDuplicates?: boolean
  }

  export type ResellerUpsertWithoutReferralsInput = {
    update: XOR<ResellerUpdateWithoutReferralsInput, ResellerUncheckedUpdateWithoutReferralsInput>
    create: XOR<ResellerCreateWithoutReferralsInput, ResellerUncheckedCreateWithoutReferralsInput>
    where?: ResellerWhereInput
  }

  export type ResellerUpdateToOneWithWhereWithoutReferralsInput = {
    where?: ResellerWhereInput
    data: XOR<ResellerUpdateWithoutReferralsInput, ResellerUncheckedUpdateWithoutReferralsInput>
  }

  export type ResellerUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: ResellerUpdateOneWithoutReferralsNestedInput
    orders?: OrderUpdateManyWithoutResellerNestedInput
    deposits?: DepositUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutResellerNestedInput
  }

  export type ResellerUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    referrerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutResellerNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutResellerNestedInput
  }

  export type ResellerUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ResellerWhereUniqueInput
    update: XOR<ResellerUpdateWithoutReferrerInput, ResellerUncheckedUpdateWithoutReferrerInput>
    create: XOR<ResellerCreateWithoutReferrerInput, ResellerUncheckedCreateWithoutReferrerInput>
  }

  export type ResellerUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ResellerWhereUniqueInput
    data: XOR<ResellerUpdateWithoutReferrerInput, ResellerUncheckedUpdateWithoutReferrerInput>
  }

  export type ResellerUpdateManyWithWhereWithoutReferrerInput = {
    where: ResellerScalarWhereInput
    data: XOR<ResellerUpdateManyMutationInput, ResellerUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ResellerScalarWhereInput = {
    AND?: ResellerScalarWhereInput | ResellerScalarWhereInput[]
    OR?: ResellerScalarWhereInput[]
    NOT?: ResellerScalarWhereInput | ResellerScalarWhereInput[]
    id?: StringFilter<"Reseller"> | string
    email?: StringNullableFilter<"Reseller"> | string | null
    username?: StringFilter<"Reseller"> | string
    name?: StringFilter<"Reseller"> | string
    tier?: EnumResellerTierFilter<"Reseller"> | $Enums.ResellerTier
    status?: EnumResellerStatusFilter<"Reseller"> | $Enums.ResellerStatus
    balance?: BigIntFilter<"Reseller"> | bigint | number
    monthlyTurnover?: BigIntFilter<"Reseller"> | bigint | number
    totalTurnoverAllTime?: BigIntFilter<"Reseller"> | bigint | number
    discordUserId?: StringNullableFilter<"Reseller"> | string | null
    telegramUserId?: StringNullableFilter<"Reseller"> | string | null
    whatsappPhoneNumber?: StringNullableFilter<"Reseller"> | string | null
    referrerId?: StringNullableFilter<"Reseller"> | string | null
    isVerified?: BoolFilter<"Reseller"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Reseller"> | Date | string | null
    metadata?: JsonNullableFilter<"Reseller">
    createdAt?: DateTimeFilter<"Reseller"> | Date | string
    updatedAt?: DateTimeFilter<"Reseller"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutResellerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutResellerInput, OrderUncheckedUpdateWithoutResellerInput>
    create: XOR<OrderCreateWithoutResellerInput, OrderUncheckedCreateWithoutResellerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutResellerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutResellerInput, OrderUncheckedUpdateWithoutResellerInput>
  }

  export type OrderUpdateManyWithWhereWithoutResellerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutResellerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    resellerId?: StringFilter<"Order"> | string
    productId?: StringFilter<"Order"> | string
    targetGameId?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    costPrice?: BigIntFilter<"Order"> | bigint | number
    resellerPrice?: BigIntFilter<"Order"> | bigint | number
    ppnAmount?: BigIntFilter<"Order"> | bigint | number
    marginAmount?: BigIntFilter<"Order"> | bigint | number
    profit?: BigIntFilter<"Order"> | bigint | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    failureReason?: StringNullableFilter<"Order"> | string | null
    externalRef?: StringNullableFilter<"Order"> | string | null
    supplierOrderData?: StringNullableFilter<"Order"> | string | null
    idempotencyKey?: StringFilter<"Order"> | string
    metadata?: JsonNullableFilter<"Order">
    createdAt?: DateTimeFilter<"Order"> | Date | string
    processedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type DepositUpsertWithWhereUniqueWithoutResellerInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutResellerInput, DepositUncheckedUpdateWithoutResellerInput>
    create: XOR<DepositCreateWithoutResellerInput, DepositUncheckedCreateWithoutResellerInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutResellerInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutResellerInput, DepositUncheckedUpdateWithoutResellerInput>
  }

  export type DepositUpdateManyWithWhereWithoutResellerInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutResellerInput>
  }

  export type DepositScalarWhereInput = {
    AND?: DepositScalarWhereInput | DepositScalarWhereInput[]
    OR?: DepositScalarWhereInput[]
    NOT?: DepositScalarWhereInput | DepositScalarWhereInput[]
    id?: StringFilter<"Deposit"> | string
    resellerId?: StringFilter<"Deposit"> | string
    amount?: BigIntFilter<"Deposit"> | bigint | number
    paymentChannel?: EnumPaymentChannelFilter<"Deposit"> | $Enums.PaymentChannel
    status?: EnumDepositStatusFilter<"Deposit"> | $Enums.DepositStatus
    externalPaymentId?: StringNullableFilter<"Deposit"> | string | null
    paymentUrl?: StringNullableFilter<"Deposit"> | string | null
    qrCodeUrl?: StringNullableFilter<"Deposit"> | string | null
    virtualAccountNumber?: StringNullableFilter<"Deposit"> | string | null
    bankName?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    expiresAt?: DateTimeFilter<"Deposit"> | Date | string
    paidAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutResellerInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutResellerInput, AuditLogUncheckedUpdateWithoutResellerInput>
    create: XOR<AuditLogCreateWithoutResellerInput, AuditLogUncheckedCreateWithoutResellerInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutResellerInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutResellerInput, AuditLogUncheckedUpdateWithoutResellerInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutResellerInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutResellerInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    resellerId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    performedBy?: StringNullableFilter<"AuditLog"> | string | null
    notes?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type OrderCreateWithoutProductInput = {
    id?: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
    reseller: ResellerCreateNestedOneWithoutOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProductInput = {
    id?: string
    resellerId: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutProductInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderCreateManyProductInputEnvelope = {
    data: OrderCreateManyProductInput | OrderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type TierPriceCreateWithoutProductInput = {
    id?: string
    tier: $Enums.ResellerTier
    markup: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TierPriceUncheckedCreateWithoutProductInput = {
    id?: string
    tier: $Enums.ResellerTier
    markup: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TierPriceCreateOrConnectWithoutProductInput = {
    where: TierPriceWhereUniqueInput
    create: XOR<TierPriceCreateWithoutProductInput, TierPriceUncheckedCreateWithoutProductInput>
  }

  export type TierPriceCreateManyProductInputEnvelope = {
    data: TierPriceCreateManyProductInput | TierPriceCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductPricingCreateWithoutProductInput = {
    id?: string
    denomination: number
    supplierPrice: bigint | number
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPricingUncheckedCreateWithoutProductInput = {
    id?: string
    denomination: number
    supplierPrice: bigint | number
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPricingCreateOrConnectWithoutProductInput = {
    where: ProductPricingWhereUniqueInput
    create: XOR<ProductPricingCreateWithoutProductInput, ProductPricingUncheckedCreateWithoutProductInput>
  }

  export type ProductPricingCreateManyProductInputEnvelope = {
    data: ProductPricingCreateManyProductInput | ProductPricingCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
  }

  export type OrderUpdateManyWithWhereWithoutProductInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProductInput>
  }

  export type TierPriceUpsertWithWhereUniqueWithoutProductInput = {
    where: TierPriceWhereUniqueInput
    update: XOR<TierPriceUpdateWithoutProductInput, TierPriceUncheckedUpdateWithoutProductInput>
    create: XOR<TierPriceCreateWithoutProductInput, TierPriceUncheckedCreateWithoutProductInput>
  }

  export type TierPriceUpdateWithWhereUniqueWithoutProductInput = {
    where: TierPriceWhereUniqueInput
    data: XOR<TierPriceUpdateWithoutProductInput, TierPriceUncheckedUpdateWithoutProductInput>
  }

  export type TierPriceUpdateManyWithWhereWithoutProductInput = {
    where: TierPriceScalarWhereInput
    data: XOR<TierPriceUpdateManyMutationInput, TierPriceUncheckedUpdateManyWithoutProductInput>
  }

  export type TierPriceScalarWhereInput = {
    AND?: TierPriceScalarWhereInput | TierPriceScalarWhereInput[]
    OR?: TierPriceScalarWhereInput[]
    NOT?: TierPriceScalarWhereInput | TierPriceScalarWhereInput[]
    id?: StringFilter<"TierPrice"> | string
    productId?: StringFilter<"TierPrice"> | string
    tier?: EnumResellerTierFilter<"TierPrice"> | $Enums.ResellerTier
    markup?: BigIntFilter<"TierPrice"> | bigint | number
    createdAt?: DateTimeFilter<"TierPrice"> | Date | string
    updatedAt?: DateTimeFilter<"TierPrice"> | Date | string
  }

  export type ProductPricingUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPricingWhereUniqueInput
    update: XOR<ProductPricingUpdateWithoutProductInput, ProductPricingUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPricingCreateWithoutProductInput, ProductPricingUncheckedCreateWithoutProductInput>
  }

  export type ProductPricingUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPricingWhereUniqueInput
    data: XOR<ProductPricingUpdateWithoutProductInput, ProductPricingUncheckedUpdateWithoutProductInput>
  }

  export type ProductPricingUpdateManyWithWhereWithoutProductInput = {
    where: ProductPricingScalarWhereInput
    data: XOR<ProductPricingUpdateManyMutationInput, ProductPricingUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPricingScalarWhereInput = {
    AND?: ProductPricingScalarWhereInput | ProductPricingScalarWhereInput[]
    OR?: ProductPricingScalarWhereInput[]
    NOT?: ProductPricingScalarWhereInput | ProductPricingScalarWhereInput[]
    id?: StringFilter<"ProductPricing"> | string
    productId?: StringFilter<"ProductPricing"> | string
    denomination?: IntFilter<"ProductPricing"> | number
    supplierPrice?: BigIntFilter<"ProductPricing"> | bigint | number
    effectiveFrom?: DateTimeFilter<"ProductPricing"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"ProductPricing"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductPricing"> | Date | string
    updatedAt?: DateTimeFilter<"ProductPricing"> | Date | string
  }

  export type ProductCreateWithoutTierPricesInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProductInput
    pricingHistory?: ProductPricingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTierPricesInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    pricingHistory?: ProductPricingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTierPricesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTierPricesInput, ProductUncheckedCreateWithoutTierPricesInput>
  }

  export type ProductUpsertWithoutTierPricesInput = {
    update: XOR<ProductUpdateWithoutTierPricesInput, ProductUncheckedUpdateWithoutTierPricesInput>
    create: XOR<ProductCreateWithoutTierPricesInput, ProductUncheckedCreateWithoutTierPricesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTierPricesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTierPricesInput, ProductUncheckedUpdateWithoutTierPricesInput>
  }

  export type ProductUpdateWithoutTierPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    pricingHistory?: ProductPricingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTierPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    pricingHistory?: ProductPricingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ResellerCreateWithoutDepositsInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrer?: ResellerCreateNestedOneWithoutReferralsInput
    referrals?: ResellerCreateNestedManyWithoutReferrerInput
    orders?: OrderCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogCreateNestedManyWithoutResellerInput
  }

  export type ResellerUncheckedCreateWithoutDepositsInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    referrerId?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: ResellerUncheckedCreateNestedManyWithoutReferrerInput
    orders?: OrderUncheckedCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutResellerInput
  }

  export type ResellerCreateOrConnectWithoutDepositsInput = {
    where: ResellerWhereUniqueInput
    create: XOR<ResellerCreateWithoutDepositsInput, ResellerUncheckedCreateWithoutDepositsInput>
  }

  export type TransactionCreateWithoutDepositInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
    order?: OrderCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutDepositInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    orderId?: string | null
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutDepositInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput>
  }

  export type TransactionCreateManyDepositInputEnvelope = {
    data: TransactionCreateManyDepositInput | TransactionCreateManyDepositInput[]
    skipDuplicates?: boolean
  }

  export type ResellerUpsertWithoutDepositsInput = {
    update: XOR<ResellerUpdateWithoutDepositsInput, ResellerUncheckedUpdateWithoutDepositsInput>
    create: XOR<ResellerCreateWithoutDepositsInput, ResellerUncheckedCreateWithoutDepositsInput>
    where?: ResellerWhereInput
  }

  export type ResellerUpdateToOneWithWhereWithoutDepositsInput = {
    where?: ResellerWhereInput
    data: XOR<ResellerUpdateWithoutDepositsInput, ResellerUncheckedUpdateWithoutDepositsInput>
  }

  export type ResellerUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: ResellerUpdateOneWithoutReferralsNestedInput
    referrals?: ResellerUpdateManyWithoutReferrerNestedInput
    orders?: OrderUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutResellerNestedInput
  }

  export type ResellerUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    referrerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: ResellerUncheckedUpdateManyWithoutReferrerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutResellerNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutDepositInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutDepositInput, TransactionUncheckedUpdateWithoutDepositInput>
    create: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutDepositInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutDepositInput, TransactionUncheckedUpdateWithoutDepositInput>
  }

  export type TransactionUpdateManyWithWhereWithoutDepositInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutDepositInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    amount?: BigIntFilter<"Transaction"> | bigint | number
    balance_before?: BigIntFilter<"Transaction"> | bigint | number
    balance_after?: BigIntFilter<"Transaction"> | bigint | number
    depositId?: StringNullableFilter<"Transaction"> | string | null
    orderId?: StringNullableFilter<"Transaction"> | string | null
    notes?: StringNullableFilter<"Transaction"> | string | null
    adjustedBy?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type ResellerCreateWithoutOrdersInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrer?: ResellerCreateNestedOneWithoutReferralsInput
    referrals?: ResellerCreateNestedManyWithoutReferrerInput
    deposits?: DepositCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogCreateNestedManyWithoutResellerInput
  }

  export type ResellerUncheckedCreateWithoutOrdersInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    referrerId?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: ResellerUncheckedCreateNestedManyWithoutReferrerInput
    deposits?: DepositUncheckedCreateNestedManyWithoutResellerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutResellerInput
  }

  export type ResellerCreateOrConnectWithoutOrdersInput = {
    where: ResellerWhereUniqueInput
    create: XOR<ResellerCreateWithoutOrdersInput, ResellerUncheckedCreateWithoutOrdersInput>
  }

  export type ProductCreateWithoutOrdersInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tierPrices?: TierPriceCreateNestedManyWithoutProductInput
    pricingHistory?: ProductPricingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tierPrices?: TierPriceUncheckedCreateNestedManyWithoutProductInput
    pricingHistory?: ProductPricingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type TransactionCreateWithoutOrderInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
    deposit?: DepositCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutOrderInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    depositId?: string | null
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput>
  }

  export type TransactionCreateManyOrderInputEnvelope = {
    data: TransactionCreateManyOrderInput | TransactionCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ResellerUpsertWithoutOrdersInput = {
    update: XOR<ResellerUpdateWithoutOrdersInput, ResellerUncheckedUpdateWithoutOrdersInput>
    create: XOR<ResellerCreateWithoutOrdersInput, ResellerUncheckedCreateWithoutOrdersInput>
    where?: ResellerWhereInput
  }

  export type ResellerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ResellerWhereInput
    data: XOR<ResellerUpdateWithoutOrdersInput, ResellerUncheckedUpdateWithoutOrdersInput>
  }

  export type ResellerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: ResellerUpdateOneWithoutReferralsNestedInput
    referrals?: ResellerUpdateManyWithoutReferrerNestedInput
    deposits?: DepositUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutResellerNestedInput
  }

  export type ResellerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    referrerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: ResellerUncheckedUpdateManyWithoutReferrerNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutResellerNestedInput
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tierPrices?: TierPriceUpdateManyWithoutProductNestedInput
    pricingHistory?: ProductPricingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tierPrices?: TierPriceUncheckedUpdateManyWithoutProductNestedInput
    pricingHistory?: ProductPricingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutOrderInput, TransactionUncheckedUpdateWithoutOrderInput>
    create: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutOrderInput, TransactionUncheckedUpdateWithoutOrderInput>
  }

  export type TransactionUpdateManyWithWhereWithoutOrderInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutOrderInput>
  }

  export type DepositCreateWithoutTransactionsInput = {
    id?: string
    amount: bigint | number
    paymentChannel?: $Enums.PaymentChannel
    status?: $Enums.DepositStatus
    externalPaymentId?: string | null
    paymentUrl?: string | null
    qrCodeUrl?: string | null
    virtualAccountNumber?: string | null
    bankName?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    paidAt?: Date | string | null
    updatedAt?: Date | string
    reseller: ResellerCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateWithoutTransactionsInput = {
    id?: string
    resellerId: string
    amount: bigint | number
    paymentChannel?: $Enums.PaymentChannel
    status?: $Enums.DepositStatus
    externalPaymentId?: string | null
    paymentUrl?: string | null
    qrCodeUrl?: string | null
    virtualAccountNumber?: string | null
    bankName?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    paidAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DepositCreateOrConnectWithoutTransactionsInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutTransactionsInput, DepositUncheckedCreateWithoutTransactionsInput>
  }

  export type OrderCreateWithoutTransactionsInput = {
    id?: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
    reseller: ResellerCreateNestedOneWithoutOrdersInput
    product: ProductCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutTransactionsInput = {
    id?: string
    resellerId: string
    productId: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutTransactionsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
  }

  export type DepositUpsertWithoutTransactionsInput = {
    update: XOR<DepositUpdateWithoutTransactionsInput, DepositUncheckedUpdateWithoutTransactionsInput>
    create: XOR<DepositCreateWithoutTransactionsInput, DepositUncheckedCreateWithoutTransactionsInput>
    where?: DepositWhereInput
  }

  export type DepositUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: DepositWhereInput
    data: XOR<DepositUpdateWithoutTransactionsInput, DepositUncheckedUpdateWithoutTransactionsInput>
  }

  export type DepositUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reseller?: ResellerUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithoutTransactionsInput = {
    update: XOR<OrderUpdateWithoutTransactionsInput, OrderUncheckedUpdateWithoutTransactionsInput>
    create: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutTransactionsInput, OrderUncheckedUpdateWithoutTransactionsInput>
  }

  export type OrderUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reseller?: ResellerUpdateOneRequiredWithoutOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellerCreateWithoutAuditLogsInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrer?: ResellerCreateNestedOneWithoutReferralsInput
    referrals?: ResellerCreateNestedManyWithoutReferrerInput
    orders?: OrderCreateNestedManyWithoutResellerInput
    deposits?: DepositCreateNestedManyWithoutResellerInput
  }

  export type ResellerUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    referrerId?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: ResellerUncheckedCreateNestedManyWithoutReferrerInput
    orders?: OrderUncheckedCreateNestedManyWithoutResellerInput
    deposits?: DepositUncheckedCreateNestedManyWithoutResellerInput
  }

  export type ResellerCreateOrConnectWithoutAuditLogsInput = {
    where: ResellerWhereUniqueInput
    create: XOR<ResellerCreateWithoutAuditLogsInput, ResellerUncheckedCreateWithoutAuditLogsInput>
  }

  export type ResellerUpsertWithoutAuditLogsInput = {
    update: XOR<ResellerUpdateWithoutAuditLogsInput, ResellerUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ResellerCreateWithoutAuditLogsInput, ResellerUncheckedCreateWithoutAuditLogsInput>
    where?: ResellerWhereInput
  }

  export type ResellerUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ResellerWhereInput
    data: XOR<ResellerUpdateWithoutAuditLogsInput, ResellerUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ResellerUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: ResellerUpdateOneWithoutReferralsNestedInput
    referrals?: ResellerUpdateManyWithoutReferrerNestedInput
    orders?: OrderUpdateManyWithoutResellerNestedInput
    deposits?: DepositUpdateManyWithoutResellerNestedInput
  }

  export type ResellerUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    referrerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: ResellerUncheckedUpdateManyWithoutReferrerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutResellerNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutResellerNestedInput
  }

  export type ProductCreateWithoutPricingHistoryInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProductInput
    tierPrices?: TierPriceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPricingHistoryInput = {
    id?: string
    code: string
    gameName: string
    displayName: string
    description?: string | null
    costPrice: bigint | number
    baseMarkup?: bigint | number
    active?: boolean
    maxStock?: number | null
    currentStock?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    tierPrices?: TierPriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPricingHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPricingHistoryInput, ProductUncheckedCreateWithoutPricingHistoryInput>
  }

  export type ProductUpsertWithoutPricingHistoryInput = {
    update: XOR<ProductUpdateWithoutPricingHistoryInput, ProductUncheckedUpdateWithoutPricingHistoryInput>
    create: XOR<ProductCreateWithoutPricingHistoryInput, ProductUncheckedCreateWithoutPricingHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPricingHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPricingHistoryInput, ProductUncheckedUpdateWithoutPricingHistoryInput>
  }

  export type ProductUpdateWithoutPricingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    tierPrices?: TierPriceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPricingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    baseMarkup?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: BoolFieldUpdateOperationsInput | boolean
    maxStock?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    tierPrices?: TierPriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SupplierProductCreateWithoutPanelInput = {
    id?: string
    productCode: string
    isAvailable?: boolean
    lastPrice?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierProductUncheckedCreateWithoutPanelInput = {
    id?: string
    productCode: string
    isAvailable?: boolean
    lastPrice?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierProductCreateOrConnectWithoutPanelInput = {
    where: SupplierProductWhereUniqueInput
    create: XOR<SupplierProductCreateWithoutPanelInput, SupplierProductUncheckedCreateWithoutPanelInput>
  }

  export type SupplierProductCreateManyPanelInputEnvelope = {
    data: SupplierProductCreateManyPanelInput | SupplierProductCreateManyPanelInput[]
    skipDuplicates?: boolean
  }

  export type SupplierHealthMetricCreateWithoutPanelInput = {
    id?: string
    responseTimeMs: number
    isHealthy: boolean
    createdAt?: Date | string
  }

  export type SupplierHealthMetricUncheckedCreateWithoutPanelInput = {
    id?: string
    responseTimeMs: number
    isHealthy: boolean
    createdAt?: Date | string
  }

  export type SupplierHealthMetricCreateOrConnectWithoutPanelInput = {
    where: SupplierHealthMetricWhereUniqueInput
    create: XOR<SupplierHealthMetricCreateWithoutPanelInput, SupplierHealthMetricUncheckedCreateWithoutPanelInput>
  }

  export type SupplierHealthMetricCreateManyPanelInputEnvelope = {
    data: SupplierHealthMetricCreateManyPanelInput | SupplierHealthMetricCreateManyPanelInput[]
    skipDuplicates?: boolean
  }

  export type SupplierProductUpsertWithWhereUniqueWithoutPanelInput = {
    where: SupplierProductWhereUniqueInput
    update: XOR<SupplierProductUpdateWithoutPanelInput, SupplierProductUncheckedUpdateWithoutPanelInput>
    create: XOR<SupplierProductCreateWithoutPanelInput, SupplierProductUncheckedCreateWithoutPanelInput>
  }

  export type SupplierProductUpdateWithWhereUniqueWithoutPanelInput = {
    where: SupplierProductWhereUniqueInput
    data: XOR<SupplierProductUpdateWithoutPanelInput, SupplierProductUncheckedUpdateWithoutPanelInput>
  }

  export type SupplierProductUpdateManyWithWhereWithoutPanelInput = {
    where: SupplierProductScalarWhereInput
    data: XOR<SupplierProductUpdateManyMutationInput, SupplierProductUncheckedUpdateManyWithoutPanelInput>
  }

  export type SupplierProductScalarWhereInput = {
    AND?: SupplierProductScalarWhereInput | SupplierProductScalarWhereInput[]
    OR?: SupplierProductScalarWhereInput[]
    NOT?: SupplierProductScalarWhereInput | SupplierProductScalarWhereInput[]
    id?: StringFilter<"SupplierProduct"> | string
    panelId?: StringFilter<"SupplierProduct"> | string
    productCode?: StringFilter<"SupplierProduct"> | string
    isAvailable?: BoolFilter<"SupplierProduct"> | boolean
    lastPrice?: BigIntNullableFilter<"SupplierProduct"> | bigint | number | null
    createdAt?: DateTimeFilter<"SupplierProduct"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierProduct"> | Date | string
  }

  export type SupplierHealthMetricUpsertWithWhereUniqueWithoutPanelInput = {
    where: SupplierHealthMetricWhereUniqueInput
    update: XOR<SupplierHealthMetricUpdateWithoutPanelInput, SupplierHealthMetricUncheckedUpdateWithoutPanelInput>
    create: XOR<SupplierHealthMetricCreateWithoutPanelInput, SupplierHealthMetricUncheckedCreateWithoutPanelInput>
  }

  export type SupplierHealthMetricUpdateWithWhereUniqueWithoutPanelInput = {
    where: SupplierHealthMetricWhereUniqueInput
    data: XOR<SupplierHealthMetricUpdateWithoutPanelInput, SupplierHealthMetricUncheckedUpdateWithoutPanelInput>
  }

  export type SupplierHealthMetricUpdateManyWithWhereWithoutPanelInput = {
    where: SupplierHealthMetricScalarWhereInput
    data: XOR<SupplierHealthMetricUpdateManyMutationInput, SupplierHealthMetricUncheckedUpdateManyWithoutPanelInput>
  }

  export type SupplierHealthMetricScalarWhereInput = {
    AND?: SupplierHealthMetricScalarWhereInput | SupplierHealthMetricScalarWhereInput[]
    OR?: SupplierHealthMetricScalarWhereInput[]
    NOT?: SupplierHealthMetricScalarWhereInput | SupplierHealthMetricScalarWhereInput[]
    id?: StringFilter<"SupplierHealthMetric"> | string
    panelId?: StringFilter<"SupplierHealthMetric"> | string
    responseTimeMs?: IntFilter<"SupplierHealthMetric"> | number
    isHealthy?: BoolFilter<"SupplierHealthMetric"> | boolean
    createdAt?: DateTimeFilter<"SupplierHealthMetric"> | Date | string
  }

  export type SupplierPanelCreateWithoutProductsInput = {
    id?: string
    name: string
    apiUrl: string
    apiKey: string
    isActive?: boolean
    priority?: number
    healthStatus?: string
    successRate?: number
    avgResponseTimeMs?: number
    lastHealthCheck?: Date | string | null
    totalRequests?: number
    totalSuccesses?: number
    totalFailures?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: SupplierHealthMetricCreateNestedManyWithoutPanelInput
  }

  export type SupplierPanelUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    apiUrl: string
    apiKey: string
    isActive?: boolean
    priority?: number
    healthStatus?: string
    successRate?: number
    avgResponseTimeMs?: number
    lastHealthCheck?: Date | string | null
    totalRequests?: number
    totalSuccesses?: number
    totalFailures?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    healthMetrics?: SupplierHealthMetricUncheckedCreateNestedManyWithoutPanelInput
  }

  export type SupplierPanelCreateOrConnectWithoutProductsInput = {
    where: SupplierPanelWhereUniqueInput
    create: XOR<SupplierPanelCreateWithoutProductsInput, SupplierPanelUncheckedCreateWithoutProductsInput>
  }

  export type SupplierPanelUpsertWithoutProductsInput = {
    update: XOR<SupplierPanelUpdateWithoutProductsInput, SupplierPanelUncheckedUpdateWithoutProductsInput>
    create: XOR<SupplierPanelCreateWithoutProductsInput, SupplierPanelUncheckedCreateWithoutProductsInput>
    where?: SupplierPanelWhereInput
  }

  export type SupplierPanelUpdateToOneWithWhereWithoutProductsInput = {
    where?: SupplierPanelWhereInput
    data: XOR<SupplierPanelUpdateWithoutProductsInput, SupplierPanelUncheckedUpdateWithoutProductsInput>
  }

  export type SupplierPanelUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    healthStatus?: StringFieldUpdateOperationsInput | string
    successRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTimeMs?: IntFieldUpdateOperationsInput | number
    lastHealthCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalSuccesses?: IntFieldUpdateOperationsInput | number
    totalFailures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: SupplierHealthMetricUpdateManyWithoutPanelNestedInput
  }

  export type SupplierPanelUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    healthStatus?: StringFieldUpdateOperationsInput | string
    successRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTimeMs?: IntFieldUpdateOperationsInput | number
    lastHealthCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalSuccesses?: IntFieldUpdateOperationsInput | number
    totalFailures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthMetrics?: SupplierHealthMetricUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type SupplierPanelCreateWithoutHealthMetricsInput = {
    id?: string
    name: string
    apiUrl: string
    apiKey: string
    isActive?: boolean
    priority?: number
    healthStatus?: string
    successRate?: number
    avgResponseTimeMs?: number
    lastHealthCheck?: Date | string | null
    totalRequests?: number
    totalSuccesses?: number
    totalFailures?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: SupplierProductCreateNestedManyWithoutPanelInput
  }

  export type SupplierPanelUncheckedCreateWithoutHealthMetricsInput = {
    id?: string
    name: string
    apiUrl: string
    apiKey: string
    isActive?: boolean
    priority?: number
    healthStatus?: string
    successRate?: number
    avgResponseTimeMs?: number
    lastHealthCheck?: Date | string | null
    totalRequests?: number
    totalSuccesses?: number
    totalFailures?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: SupplierProductUncheckedCreateNestedManyWithoutPanelInput
  }

  export type SupplierPanelCreateOrConnectWithoutHealthMetricsInput = {
    where: SupplierPanelWhereUniqueInput
    create: XOR<SupplierPanelCreateWithoutHealthMetricsInput, SupplierPanelUncheckedCreateWithoutHealthMetricsInput>
  }

  export type SupplierPanelUpsertWithoutHealthMetricsInput = {
    update: XOR<SupplierPanelUpdateWithoutHealthMetricsInput, SupplierPanelUncheckedUpdateWithoutHealthMetricsInput>
    create: XOR<SupplierPanelCreateWithoutHealthMetricsInput, SupplierPanelUncheckedCreateWithoutHealthMetricsInput>
    where?: SupplierPanelWhereInput
  }

  export type SupplierPanelUpdateToOneWithWhereWithoutHealthMetricsInput = {
    where?: SupplierPanelWhereInput
    data: XOR<SupplierPanelUpdateWithoutHealthMetricsInput, SupplierPanelUncheckedUpdateWithoutHealthMetricsInput>
  }

  export type SupplierPanelUpdateWithoutHealthMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    healthStatus?: StringFieldUpdateOperationsInput | string
    successRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTimeMs?: IntFieldUpdateOperationsInput | number
    lastHealthCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalSuccesses?: IntFieldUpdateOperationsInput | number
    totalFailures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: SupplierProductUpdateManyWithoutPanelNestedInput
  }

  export type SupplierPanelUncheckedUpdateWithoutHealthMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    healthStatus?: StringFieldUpdateOperationsInput | string
    successRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTimeMs?: IntFieldUpdateOperationsInput | number
    lastHealthCheck?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalSuccesses?: IntFieldUpdateOperationsInput | number
    totalFailures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: SupplierProductUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type ResellerCreateManyReferrerInput = {
    id?: string
    email?: string | null
    username: string
    name: string
    tier?: $Enums.ResellerTier
    status?: $Enums.ResellerStatus
    balance?: bigint | number
    monthlyTurnover?: bigint | number
    totalTurnoverAllTime?: bigint | number
    discordUserId?: string | null
    telegramUserId?: string | null
    whatsappPhoneNumber?: string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyResellerInput = {
    id?: string
    productId: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type DepositCreateManyResellerInput = {
    id?: string
    amount: bigint | number
    paymentChannel?: $Enums.PaymentChannel
    status?: $Enums.DepositStatus
    externalPaymentId?: string | null
    paymentUrl?: string | null
    qrCodeUrl?: string | null
    virtualAccountNumber?: string | null
    bankName?: string | null
    createdAt?: Date | string
    expiresAt?: Date | string
    paidAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyResellerInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    oldValue?: string | null
    newValue?: string | null
    performedBy?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ResellerUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: ResellerUpdateManyWithoutReferrerNestedInput
    orders?: OrderUpdateManyWithoutResellerNestedInput
    deposits?: DepositUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutResellerNestedInput
  }

  export type ResellerUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: ResellerUncheckedUpdateManyWithoutReferrerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutResellerNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutResellerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutResellerNestedInput
  }

  export type ResellerUncheckedUpdateManyWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    status?: EnumResellerStatusFieldUpdateOperationsInput | $Enums.ResellerStatus
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyTurnover?: BigIntFieldUpdateOperationsInput | bigint | number
    totalTurnoverAllTime?: BigIntFieldUpdateOperationsInput | bigint | number
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpdateWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateManyWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    paymentChannel?: EnumPaymentChannelFieldUpdateOperationsInput | $Enums.PaymentChannel
    status?: EnumDepositStatusFieldUpdateOperationsInput | $Enums.DepositStatus
    externalPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    virtualAccountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutResellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyProductInput = {
    id?: string
    resellerId: string
    targetGameId: string
    quantity?: number
    costPrice: bigint | number
    resellerPrice: bigint | number
    ppnAmount?: bigint | number
    marginAmount?: bigint | number
    profit?: bigint | number
    status?: $Enums.OrderStatus
    failureReason?: string | null
    externalRef?: string | null
    supplierOrderData?: string | null
    idempotencyKey?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TierPriceCreateManyProductInput = {
    id?: string
    tier: $Enums.ResellerTier
    markup: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductPricingCreateManyProductInput = {
    id?: string
    denomination: number
    supplierPrice: bigint | number
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reseller?: ResellerUpdateOneRequiredWithoutOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellerId?: StringFieldUpdateOperationsInput | string
    targetGameId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    resellerPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    ppnAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    marginAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    profit?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    supplierOrderData?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TierPriceUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    markup?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TierPriceUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    markup?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TierPriceUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumResellerTierFieldUpdateOperationsInput | $Enums.ResellerTier
    markup?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricingUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    denomination?: IntFieldUpdateOperationsInput | number
    supplierPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricingUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    denomination?: IntFieldUpdateOperationsInput | number
    supplierPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPricingUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    denomination?: IntFieldUpdateOperationsInput | number
    supplierPrice?: BigIntFieldUpdateOperationsInput | bigint | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyDepositInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    orderId?: string | null
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyOrderInput = {
    id?: string
    type: string
    amount: bigint | number
    balance_before: bigint | number
    balance_after: bigint | number
    depositId?: string | null
    notes?: string | null
    adjustedBy?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: DepositUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    depositId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_before?: BigIntFieldUpdateOperationsInput | bigint | number
    balance_after?: BigIntFieldUpdateOperationsInput | bigint | number
    depositId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adjustedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductCreateManyPanelInput = {
    id?: string
    productCode: string
    isAvailable?: boolean
    lastPrice?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierHealthMetricCreateManyPanelInput = {
    id?: string
    responseTimeMs: number
    isHealthy: boolean
    createdAt?: Date | string
  }

  export type SupplierProductUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductUncheckedUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierProductUncheckedUpdateManyWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    lastPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierHealthMetricUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    isHealthy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierHealthMetricUncheckedUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    isHealthy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierHealthMetricUncheckedUpdateManyWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    isHealthy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ResellerCountOutputTypeDefaultArgs instead
     */
    export type ResellerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResellerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepositCountOutputTypeDefaultArgs instead
     */
    export type DepositCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepositCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierPanelCountOutputTypeDefaultArgs instead
     */
    export type SupplierPanelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierPanelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResellerDefaultArgs instead
     */
    export type ResellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResellerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TierPriceDefaultArgs instead
     */
    export type TierPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TierPriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepositDefaultArgs instead
     */
    export type DepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepositDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminUserDefaultArgs instead
     */
    export type AdminUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailySummaryDefaultArgs instead
     */
    export type DailySummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailySummaryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonthlySummaryDefaultArgs instead
     */
    export type MonthlySummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonthlySummaryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebhookLogDefaultArgs instead
     */
    export type WebhookLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebhookLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductPricingDefaultArgs instead
     */
    export type ProductPricingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductPricingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierPanelDefaultArgs instead
     */
    export type SupplierPanelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierPanelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierProductDefaultArgs instead
     */
    export type SupplierProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierHealthMetricDefaultArgs instead
     */
    export type SupplierHealthMetricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierHealthMetricDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
