export interface HasIncludes<Item> {
  includes(item: Item): boolean;
}

export type Maybe<T> = null | T;
