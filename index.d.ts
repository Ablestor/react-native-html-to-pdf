type Options = {
  html: string;
  fileName?: string;
  base64?: boolean;
  directory?: string;
  height?: number;
  width?: number;

  // ios
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  padding?: number;
  bgColor?: stringnumber;

  // android
  fonts?: string[];
};

declare const RNHTMLtoPDF: {
  convert: (options: Options) => Promise<{ filePath: string }>;
};
export default RNHTMLtoPDF;
