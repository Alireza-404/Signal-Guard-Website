import FooterLinks from "../FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <footer className="relative z-30">
      <div className="px-5 md:px-10 xl:px-0 py-20 bg-[#000d01] xl:container xl:mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-x-10">
          <div className="flex flex-col gap-y-10">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="34"
                viewBox="0 0 142 34"
                fill="none"
              >
                <path
                  d="M130.552 23.7904H128.062L131.504 18.6469C131.97 17.9381 132.193 17.4319 132.193 16.9257C132.193 16.3992 131.95 15.8929 131.504 15.2044L128.203 10.2229H130.613L133.428 14.4754C133.732 15.0019 133.975 15.5082 134.096 16.0347H135.23C135.352 15.5082 135.574 15.0019 135.898 14.4754L138.693 10.2229H141.123L137.802 15.2044C137.356 15.8929 137.154 16.3992 137.154 16.9257C137.154 17.4319 137.336 17.9584 137.802 18.6469L141.265 23.7904H138.794L135.919 19.4974C135.574 18.9709 135.352 18.4444 135.23 17.9179H134.096C133.975 18.4444 133.752 18.9709 133.408 19.4974L130.552 23.7904Z"
                  fill="white"
                />
                <path
                  d="M124.452 23.7904H116.859C115.461 23.7904 114.955 23.0817 114.955 21.9274V12.0859C114.955 10.9317 115.461 10.2229 116.859 10.2229H124.311V12.1062H117.021V16.0549H123.906V17.9381H117.021V21.9072H124.452V23.7904Z"
                  fill="white"
                />
                <path
                  d="M110.803 10.2229V12.1264H106.632V23.7904H104.566V12.1264H100.415V10.2229H110.803Z"
                  fill="white"
                />
                <path
                  d="M90.3398 24.0333C86.391 24.0333 83.3535 20.9755 83.3535 16.9863C83.3535 13.0578 86.4113 10 90.3398 10C94.248 10 97.2855 13.0578 97.2855 16.9863C97.2855 20.9755 94.248 24.0333 90.3398 24.0333ZM90.3398 22.069C93.0128 22.069 95.1593 19.8415 95.1593 16.9863C95.1593 14.1715 93.033 11.9643 90.3398 11.9643C87.6465 11.9643 85.4798 14.1715 85.4798 16.9863C85.4798 19.8415 87.6263 22.069 90.3398 22.069Z"
                  fill="white"
                />
                <path
                  d="M71.0621 23.7904H69.0371V10.2229H73.7554C76.6309 10.2229 78.8786 11.5392 78.8786 14.3337C78.8786 16.2574 77.7041 17.6547 75.8006 18.0597C76.8941 18.5862 77.4814 19.6999 78.2711 21.2997L79.5064 23.7904H77.2789L76.1449 21.5022C75.3349 19.9024 74.6666 18.8494 72.7631 18.8494H71.0824L71.0621 23.7904ZM73.7756 12.1264H71.1026L71.0824 17.0067H73.7351C75.4766 17.0067 76.7524 16.1562 76.7524 14.5159C76.7524 12.8352 75.4159 12.1264 73.7756 12.1264Z"
                  fill="white"
                />
                <path
                  d="M56.0655 23.7904H54V10.2229H58.3133C61.9582 10.2229 64.3275 11.8632 64.3275 15.0222C64.3275 18.2622 61.9178 19.8822 58.4145 19.8822H56.0655V23.7904ZM58.374 12.1264H56.0655V17.9584H58.374C60.6015 17.9584 62.2013 17.0877 62.2013 15.0222C62.2013 13.0377 60.6622 12.1264 58.374 12.1264Z"
                  fill="white"
                />
                <rect width="34" height="34" rx="6" fill="#53DB78" />
                <mask
                  id="mask0_2172_834"
                  maskUnits="userSpaceOnUse"
                  x="6"
                  y="6"
                  width="22"
                  height="23"
                >
                  <path
                    d="M27.2008 6.5H6.80078V28.0003H27.2008V6.5Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_2172_834)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9008 6.5H27.2008V11.8751V22.6252L22.1008 28.0003V11.8751H6.80078L11.9008 6.5ZM6.80078 24.245V17.2502H13.4376L6.80078 24.245ZM17.0008 28.0003H10.4501L17.0008 21.0963V28.0003Z"
                    fill="#000D01"
                  />
                </g>
              </svg>
            </div>

            <p className="text-[#aaa] w-72">
              Smart, scalable protection, built for teams that move fast.
            </p>

            <div className="flex flex-col gap-y-2">
              <span className="text-[#666]">Email</span>
              <span className="text-[#53db78] font-medium text-xl">
                hi@protex.com
              </span>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-[#666]">Phone</span>
              <span className="text-white font-medium text-xl">
                +49 151 2345 6789
              </span>
            </div>
          </div>

          <FooterLinks />
        </div>

        <div className="pt-20 flex flex-col gap-y-10">
          <span className="h-px w-full bg-[#242424] block"></span>

          <div className="flex items-center justify-between gap-x-5">
            <p className="text-[#aaa] xs:w-96 lg:w-auto">
              Built & designed by Alireza Shabani. Crafted with experience,
              passion, and clean code.
            </p>

            <div className="relative w-16 shrink-0">
              <div className="bg-[#242424] h-2 w-8 border border-[#53db78] absolute top-0 left-0"></div>
              <div className="bg-[#242424] h-2 w-8 border border-[#53db78] absolute top-0 right-0"></div>
              <div className="bg-[#242424] h-2 w-8 border border-[#53db78] absolute bottom-0 left-0"></div>
              <div className="bg-[#242424] h-2 w-8 border border-[#53db78] absolute bottom-0 right-0"></div>
              <div
                className="bg-[#242424] h-2 w-8 border border-[#53db78] absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#53db78] via-transparent to-[#53db78]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
