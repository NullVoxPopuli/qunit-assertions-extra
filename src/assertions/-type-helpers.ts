export interface HasIncludes<Item> {
  includes(item?: Maybe<Item>): boolean;
}

export type Maybe<T> = null | T;
