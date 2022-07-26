import Head from "next/head";

const Meta = ({
  title,
  author,
  description,
  url,
  logo,
  keywords,
  ogTitle,
  ogType
}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
        ></meta>
        <meta charSet="UTF-8" />
        <meta name="author" content={author} />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta name="copyright" content={url} />
        <meta name="publisher" content={author} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={author} />
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="231" />
        <meta property="og:image:height" content="140" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logo} />
        {/* <meta name="twitter:site" content="@leewayhertz" /> */}
        <link rel="icon" href="/favicon.png"></link>
        <meta name="keywords" content={keywords}></meta>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Leadzilla",
  author: 'Leadzilla',
  description: 'leadzilla',
  url: '',
  logo: '',
  ogTitle: 'leadzilla',
  ogType: 'website',
  keywords: 'leadzilla'
};
export default Meta;
// seo todo list
// recheck => https://smallseotools.com/website-seo-score-checker/ ,  https://www.seoptimer.com/  ,   https://www.rankwatch.com/   ,   https://www.seobility.net/en/seocheck/

// add => Robots.txt, Warning! Your site does not use "robots.txt" file
// add => Sitemap, Warning! we did not find any sitemap for your website

// Image Alt =>   Your webpage has 26 'img' tags and 5 of them missing the required "alt" attribute.
// /images/aboutus-image.jpg
// /icons/process-arrow.png
// /icons/process-arrow.png
// /icons/process-arrow.png
// /icons/location.png

// Inline CSS => Your webpage is using 5 inline CSS styles
// No H1 headings Found, it highly effects your page SEO.
// This Webpage Is Not Using HTTP/2 Protocol.
// Your website is temporary using https, a secure communication protocol over the Internet. Note: if your site relies primarily on ad income, be aware that using https may be detrimental to ad earnings.
// Warning, your server signature is ON.
// Your webpage include email addresses in plaintext.
// The meta description length of your page is 173 characters. Most search engines will truncate meta descriptions to 160 characters.
// No H2 headings Found, it highly effects your page SEO.
// Your webpage has 26 'img' tags and 5 of them missing the required "alt" attribute.
// Your webpage is using 5 inline CSS styles
// Your web page is not using HTML Microdata specifications in order to markup structured data.!
// Warning, redirect is not place to redirect traffic from your non-preferred domain. Your website does not directs www. innotechteam.in and innotechteam.in to the same URL.
// Your web page does not using cache techniques, try implementing cache to improve speed.
// Consider using rel=preload to prioritize fetching resources that are currently requested later in page load. https://web.dev/uses-rel-preload/
// Initial server response time was large. 1484.681 ms Try to improve it.
// link not working => www.innotechteam.in
