import id from "../messages/id.json";

type Messages = typeof id;

declare global {
  interface IntlMessages extends Messages {}
}
