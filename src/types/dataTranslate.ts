export interface TypeDataTranslate {
  data: Data;
}

// export type DataProps = {
//   data: (key: string) => string;
// };

export interface Data {
  title: string;
  MetaData: MetaData;
  Navbar: Navbar;
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string;
  openGraph: OpenGraph;
}

export interface OpenGraph {
  title: string;
  description: string;
}

export interface Navbar {
  Link: Link;
}

export interface Link {
  Home: string;
  About: string;
  Service: string;
  Process: string;
  Contact: string;
}
