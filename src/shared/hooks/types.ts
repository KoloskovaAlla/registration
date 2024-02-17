export type NavItem = {
  target: string;
  text: string;
};

export type NavState = {
  getNav: Function;
  isLoading: boolean;
  navItems: NavItem[];
  errorMessage: string;
  setIsNavActive: Function;
  isNavActive: boolean;
};

export type Language = {
  content: string;
  value: string;
};

export type LangState = {
  getLangs: Function;
  isLoading: boolean;
  langs: Language[];
  errorMessage: string;
  setLang: Function;
  lang: string;
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
  links: ColumnLink[];
  name: string;
  title: Title;
};

export type ColumnsState = {
  getColumns: Function;
  isLoading: boolean;
  columns: Column[];
  errorMessage: string;
};

export type Developer = {
  content: Content;
  url: string;
};

export type Info = {
  developer: Developer;
  texts: string[];
};

export type InfoState = {
  getInfo: Function;
  isLoading: boolean;
  info: Info;
  errorMessage: string;
};

export type Logo = {
  alternate: string;
  source: string;
};

export type Clients = {
  logos: Logo[];
  title: Title;
  texts: string[];
};

export type ClientsState = {
  getClients: Function;
  isLoading: boolean;
  clients: Clients;
  errorMessage: string;
};

export type Link = {
  name: string;
  url: string;
};

export type SectionBase = {
  name?: string;
  title: Title;
  texts: string[];
  links?: Link[];
  image: Image;
}

export type Cashback = {
  name: string;
  title: Title;
  texts: string[];
  buttonText: string;
};

export type Download = {};
export type Warranty = {};
export type Care = {};

export type HomePage = {
  download: Download;
  warranty: Warranty;
  care: Care;
  cashback: Cashback;
};

export type HomePageState = {
  fetchHomePageData: Function;
  isLoading: boolean,
  homePageData: null | HomePage,
  errorMessage: string,
};

export type WarrantyPost = {
  name: string;
  title: string;
  links?: Link[];
  image: Image;
  article: string[];
}

export type CarePost = {
  name: string;
  title: string;
  links?: Link[];
  image: Image;
  article: string[];
}

export type ClientsPost = {
  name: string;
  title: string;
  links?: Link[];
  image: Image;
  article: string[];
}

export type CashbackPost = {
  name: string;
  title: string;
  links?: Link[];
  image: Image;
  article: string[];
}

export type Posts = {
  care: CarePost;
  cashback: CashbackPost;
  clients: ClientsPost;
  warranty: WarrantyPost;
}

export type PostsSection = {
  posts: Posts;
  buttonText: string;
  title: Title;
};

export type PostsState = {
  getPosts: Function,
  isLoading: boolean,
  postsSection: PostsSection,
  errorMessage: string,
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
  setPreviewDetails: Function;
};

export type Slide = {
  alternate: string;
  id: number;
  source: string;
};

export type SliderState = {
  slides: Slide[];
  setSlides: any;
  sliderDescription: null | string;
};

export type ThemeState = {
  theme: string;
  setTheme: object;
  toggleTheme: any;
};

export type CurrentPageState = {
  currentPage: string;
  setCurrentPage: object;
};

export type InputName = {
  type: string;
  placeholder: string;
  isValidName: boolean;
  invalidMessage: string;
  options: null;
};

export type InputTel = {
  type: string;
  label: string;
  placeholder: string;
  isValidTel: boolean;
  invalidMessage: string;
  options: null;
};

export type InputEmail = {
  type: string;
  placeholder: string;
  isValidEmail: boolean;
  invalidMessage: string;
  options: null;
};

export type Connect = {

};

export type Option = {
  value: string;
  content: string;
};

export type Connection = {
  className: string
  label: string
  options: Option[];
  isValid: boolean
  invalidMessage: string
  value: string
  onFieldChange: any
  connection: string;
};

export type InputPolicy = {
  content: string,
  type: string,
  url: string,
};

export type RegistrationData = {
  title: Title;
  inputName: InputName;
  inputSurname: InputName;
  inputTel: InputTel;
  inputEmail: InputEmail;
  connect: Connect;
  connection: Connection;
  inputPolicy: InputPolicy;
};

export type RegistrationActions = {
  setName: Function;
  setSurname: Function;
  setIsValidName: Function;
  setTel: Function;
  setIsValidTel: Function;
  setEmail: Function;
  setIsValidEmail: Function;
  setConnection: Function;
  setIsValidConnection: Function;
  setIsChecked: Function;
  setIsDataSent: Function;
  sendRegistration?: any;
  setIsModalActive: Function;
  getRegistration: Function;
};

export type RegistrationState = {
  name: string;
  surname: string;
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
  errorMessage: string;
  isRegistrationSended: boolean;
  isDataSent: boolean;
  isModalActive?: boolean;
  isLoading: boolean;
  orderData: RegistrationData;
  registrationActions: RegistrationActions;
};

export type CashbackState = {
  getCashback: Function;
  isCashbackLoading: boolean;
  cashback: null | Cashback;
  cashbackErrorMessage: string;
  setIsModalActive: Function;
};

export type PageSection = {

};

export type Image = {
  alternate: string;
  id: number;
  source: string;
}

export type sectionData = {
  title: Title;
  texts: string[];
  image: Image;
}

export type CashbackPage = {
  intro: sectionData;
  core: sectionData;
  final: sectionData;
}

export type CashbackPageState = {
  isCashbackPageLoading: boolean;
  cashbackPage: null | CashbackPage;
  cashbackPageErrorMessage: string;
  getCashbackPage: Function;
}

export type CarePage = {
  intro: sectionData;
  core: sectionData;
  final: sectionData;
}

export type CarePageState = {
  isCarePageLoading: boolean;
  carePage: null | CarePage;
  carePageErrorMessage: string;
  getCarePage: Function;
}

export type WarrantyPage = {
  intro: sectionData;
  core: sectionData;
  final: sectionData;
}

export type WarrantyPageState = {
  isWarrantyPageLoading: boolean;
  warrantyPage: null | WarrantyPage;
  warrantyPageErrorMessage: string;
  getWarrantyPage: Function;
}

export type Media = {
  type: string;
  src: string;
  alternate: string;
};

export type Post = {
  title: string;
  texts: string[];
  media: Media;
  key?: string;
};

export type PostState = {
  isPostLoading: boolean;
  post: null | Post;
  postErrorMessage: string;
  getPost: Function;
  resetPostErrorMessage: Function;
  clearPostPage: Function;
};

export type PostsPage = {
  care: Care;
  cashback: Cashback;
  warranty: Warranty;
};

export type postsPageState = {
  postsPage: PostsPage;
  getPostsPage: Function;
};

export type DownloadPage = {
  intro: sectionData;
  core: sectionData;
  final: sectionData;
};

export type DownloadPageState = {
  isDownloadPageLoading: boolean;
  downloadPage: null | DownloadPage;
  downloadPageErrorMessage: string;
  getDownloadPage: Function;
};

export type ClientsPage = {
  title: Title;
  texts: string[];
  logos: Logo[];
};

export type ClientsPageState = {
  isClientsPageLoading: boolean;
  clientsPage: null | ClientsPage;
  clientsPageErrorMessage: string;
  getClientsPage: Function;
};
