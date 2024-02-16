export type NavItem = {
  target: string;
  text: string;
};

export type NavState = {
  getNav?: Function;
  isLoading: boolean;
  navItems: NavItem[] | null;
  errorMessage: string;
  setIsNavActive?: object;
  isNavActive: boolean;
};

export type Language = {
  text: string;
  value: string;
};

export type LangsState = {
  getLang?: Function;
  isLangsLoading: boolean;
  langs: Language[];
  langsErrorMessage: string;
  setLang?: object;
  lang: string;
};

export type Image = {
  alternate: string;
  source: string;
};

export type Content = {
  text: string;
  image: Image;
  email: string;
};

export type ColumnLink = {
  content: Content;
  type: string;
  url: string;
};

export type Title = {
  content: string;
  priority: number;
};

export type Column = {
  links:ColumnLink[];
  name: string;
  title: Title;
};

export type ColumnsState = {
  getLists?: Function;
  isLoading: boolean;
  columns: Column[];
  errorMessage: string;
};

export type Developer = {
  content: Content;
  url: string;
};

export type InfoFromAPI = {
  developer: Developer;
  texts: string[];
};

export type InfoState = {
  getInfo?: Function;
  isLoading: boolean;
  info: InfoFromAPI;
  errorMessage: string;
};

export type SectionBaseLink = {
  name: string;
  url: string;
};

export type SectionBase = {
  name: string;
  title: Title;
  texts: string[];
  links?: SectionBaseLink[];
  image: Image;
}

export interface Download extends SectionBase { };

export interface Warranty extends SectionBase { };

export interface Care extends SectionBase { };

export type Cashback = {
  name: string;
  title: Title;
  texts: string[];
  buttonText: string;
};

export type HomePage = {
  download: Download;
  warranty: Warranty;
  care: Care;
  cashback: Cashback;
};

export type HomePageState = {
  getHomePage?: Function;
  isLoading: boolean,
  homePage: null | HomePage,
  errorMessage: string,
};

export type Client = {
  alternate: string;
  source: string;
};

export type PostsData = {
  buttonText: string;
  title: Title;
  care: Care;
  cashback: Cashback;
  clients: Client[];
  warranty: Warranty;
};

export type ModalData = {

};

export type OrderState = {
  isModalActive: boolean;
  isLoading: boolean;
  orderData: null | ModalData;
  errorMessage: string;
  name: string;
  isValidName: boolean;
  tel: string;
  isValidTel: boolean;
  email: string;
  isValidEmail: boolean;
  connection: string;
  isValidConnection: boolean;
  isChecked: boolean;
  isSubmitDisabled: boolean;
  isSending: boolean;
  isOrderSended: boolean;
  isDataSent: boolean;
};

export type PostsFromAPI = {
  buttonText: string;
  title: Title;
  care: Care;
  cashback: Cashback;
  clients: Client[];
  warranty: Warranty;
};

export type PreviewDetails = {
  x: string,
  y: string,
  width: string,
  height: string,
  description: string,
  id: number,
};

export type PreviewState = {
  previewDetails: null | PreviewDetails,
};
export type Slide = {
  alternate: string;
  id: number;
  source: string;
};

export type SliderState = {
  slides: Slide[];
  sliderDescription: null | string;
  setSlides?: any;
};

export type Theme =
  'light' |
  'dark' |
  string;

export type ThemeInitState = {
  theme: Theme;
};

export type CurrentPageState = {
  currentPage: string;
};

export type CashbackState = {
  isCashbackLoading: boolean;
  cashback: null | Cashback;
  cashbackErrorMessage: string;
};

export type CashbackData = {
  getCashback: Function;
  cashbackState: CashbackState;
};

export interface Intro extends SectionBase { };

export interface Core extends SectionBase { };

export interface Final extends SectionBase { };

export type CashbackPage = {
  intro: Intro;
  core: Core;
  final: Final;
}

export type CashbackPageState = {
  isCashbackPageLoading: boolean;
  cashbackPage: null | CashbackPage;
  cashbackPageErrorMessage: string;
}

export type CarePageFromAPI = {
  intro: Intro;
  core: Core;
  final: Final;
};

export type CashbackPageFromAPI = {
  intro: Intro;
  core: Core;
  final: Final;
}

export type WarrantyPage = {
  intro: Intro;
  core: Core;
  final: Final;
}

export type WarrantyPageFromAPI = {
  isWarrantyPageLoading: boolean;
  warrantyPage: WarrantyPage;
  warrantyPageErrorMessage: string;
};

export type Post = {

}

export type PostState = {
  isPostLoading: boolean,
  post: null | Post,
  postErrorMessage: string,
  isErrorMessagePost: boolean;
  errorMessagePost: string;
}

export type PostsPageState = {
  isPostsPageLoading: boolean;
  postsPage: null | Object;
  postsPageErrorMessage: string;
};

export type DownloadPageState = {
  isDownloadPageLoading: boolean;
  downloadPage: null | Object;
  downloadPageErrorMessage: string;
};

export type ClientsPageFromAPI = {
  intro: Intro;
  core: Core;
  final: Final;
};

export type ThunkAPI = {
  getState: () => any;
  fulfillWithValue: (value: any) => any;
  rejectWithValue: (value: any) => any;
};

export type Lang = {
  content: string;
  value: string;
};

export type LangsFromAPI = {
  langs: null | Lang[];
};

export type navItem = {
  target: string;
  text: string;
};

export type NavFromAPI = {
  navItems: null | navItem[];
};

export type HomePageFromAPI = {
  intro: Intro;
  core: Core;
  final: Final;
};

export type DownloadPageFromAPI = {
  intro: Intro;
  core: Core;
  final: Final;
};

export type CashbackFromAPI = {
  name: string;
  title: Title;
  texts: string[];
  buttonText: string;
};

export type CarePost = {};
export type CashbackPost = {};
export type WarrantyPost = {};

export type PostsPageFromAPI = {
  care: CarePost;
  cashback: CashbackPost,
  warranty: WarrantyPost;
};

export type Logo = {
  alternate: string;
  source: string;
};

export type ClientsFromAPI = {
  logos: Logo[];
  texts: Text[];
  title: Title;
}

export type ColumnFromAPI = {
  links: ColumnLink[];
  name: string;
  title: Title;
};

export type PostFromAPI = {

};

export type ErrorModalState = {
  isErrorMessage: boolean;
  errorMessage: string;
};

export type OrderFromAPI = {

};

export type Order = {

};

export type OrderData = {

};
