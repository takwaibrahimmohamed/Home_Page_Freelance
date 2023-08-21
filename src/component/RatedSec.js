import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const RatedSec = () => {
  return (
    <Container sx={{position:'relative',}}>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:"80px",margin:"70px 0",
      flexDirection:{xs:"column",sm:"row",md:"row"}}}>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="55" viewBox="0 0 54 55" fill="none">
            <g clip-path="url(#clip0_127_1311)">
                <path d="M26.4338 0H27.8298C30.4395 0 32.9424 1.0367 34.7877 2.88205C36.6331 4.7274 37.6698 7.23022 37.6698 9.83994V12.6406C37.6698 15.2503 36.6331 17.7532 34.7877 19.5985C32.9424 21.4439 30.4395 22.4806 27.8298 22.4806H26.4338V0Z" fill="#F24D1D"/>
                <path d="M10.2063 5.77258L11.3285 4.94222C13.4263 3.3899 16.0549 2.73453 18.6359 3.12027C21.217 3.50601 23.5391 4.90128 25.0914 6.99912L26.7573 9.25047C27.5271 10.2889 28.0848 11.4688 28.3984 12.7228C28.7121 13.9768 28.7756 15.2803 28.5853 16.5589C28.3951 17.8375 27.9548 19.066 27.2895 20.1743C26.6243 21.2826 25.7472 22.2491 24.7084 23.0183L23.5863 23.8487L10.2091 5.77051L10.2063 5.77258Z" fill="#FF8577"/>
                <path d="M0.595947 20.0742L1.00409 18.7392C1.7671 16.2436 3.49026 14.1532 5.7945 12.928C8.09874 11.7028 10.7953 11.4432 13.291 12.2062L15.9693 13.025C18.465 13.788 20.5554 15.5112 21.7805 17.8154C23.0057 20.1197 23.2654 22.8162 22.5024 25.3119L22.0942 26.6469L0.595947 20.0742Z" fill="#FFC700"/>
                <path d="M1.37622 37.2734L0.910232 35.9575C0.0390914 33.4975 0.180868 30.7922 1.30438 28.4367C2.42789 26.0812 4.44109 24.2685 6.90112 23.3973L9.54117 22.4624C12.0005 21.5911 14.7052 21.7321 17.0605 22.8545C19.4159 23.9769 21.229 25.9888 22.1012 28.4478L22.5672 29.7637L1.37447 37.2685L1.37622 37.2734Z" fill="#A837DD"/>
                <path d="M12.2413 50.6456L11.084 49.865C8.92046 48.4057 7.42523 46.1466 6.92728 43.5849C6.42932 41.0231 6.96944 38.3685 8.42877 36.2049L9.9949 33.883C11.4543 31.7235 13.7108 30.2313 16.2693 29.7337C18.8278 29.2362 21.4791 29.774 23.6414 31.2291L24.7987 32.0098L12.2326 50.6398L12.2413 50.6456Z" fill="#11A858"/>
                <path d="M28.9155 54.9298L27.5208 54.9907C24.9136 55.1045 22.3679 54.178 20.4439 52.4149C18.5198 50.6518 17.3749 48.1966 17.2611 45.5893L17.1389 42.7913C17.0251 40.1841 17.9516 37.6384 19.7147 35.7143C21.4778 33.7903 23.933 32.6454 26.5403 32.5315L27.9349 32.4706L28.9155 54.9298Z" fill="#F24D1D"/>
                <path d="M44.8772 48.4521L43.7923 49.3307C41.7642 50.973 39.1667 51.7424 36.5713 51.4696C33.9759 51.1969 31.5951 49.9042 29.9528 47.8761L28.1902 45.6995C26.5479 43.6714 25.7785 41.0739 26.0513 38.4785C26.3241 35.8831 27.6167 33.5023 29.6448 31.86L30.7297 30.9815L44.8772 48.4521Z" fill="#FF8577"/>
                <path d="M40.8918 3.71594L42.0821 4.44534C44.3072 5.80891 45.8996 8.00058 46.5088 10.5382C47.118 13.0758 46.6942 15.7515 45.3306 17.9766L43.8673 20.3646C42.5037 22.5897 40.3121 24.1821 37.7745 24.7913C35.2369 25.4005 32.5612 24.9767 30.336 23.6132L29.1458 22.8838L40.8918 3.71594Z" fill="#11A858"/>
                <path d="M52.1301 14.6788L52.653 15.9732C53.6306 18.3929 53.607 21.1018 52.5873 23.504C51.5676 25.9063 49.6354 27.8051 47.2157 28.7827L44.6125 29.8345C42.1928 30.8121 39.4838 30.7885 37.0816 29.7688C34.6793 28.7491 32.7805 26.8168 31.8029 24.3972L31.28 23.1028L52.1301 14.6788Z" fill="#A837DD"/>
                <path d="M53.6594 31.834L53.3099 33.1855C52.6565 35.7121 51.0261 37.8756 48.7775 39.2002C46.5289 40.5247 43.8462 40.9017 41.3197 40.2483L38.6082 39.5471C36.0816 38.8937 33.918 37.2633 32.5935 35.0147C31.269 32.7661 30.892 30.0834 31.5454 27.5568L31.8949 26.2053L53.6594 31.834Z" fill="#FEC700"/>
            </g>
        <defs>
    <clipPath id="clip0_127_1311">
      <rect width="53.3178" height="55" fill="white" transform="translate(0.341064)"/>
    </clipPath>
  </defs>
</svg>
<Typography sx={{
    color: "#294E2C",
    textAlign: "center",
    fontFamily: "Prettywise Variable",
    fontSize: "45px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "35px", /* 77.778% */
    letterSpacing: "1.35px",
    margin:"25px 0"
}}>100K+</Typography>
<Typography sx={{
    color: "#A89C96",
    textAlign: "center",
    fontFamily: "Nexa Bold",
    fontSize: "15px",
    fontStyle: "normal",
    fontHeight: "700",
    lineGeight: "20px", /* 133.333% */
}}>More than two hundred<br/> thousand sold last year</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="55" viewBox="0 0 54 55" fill="none">
            <g clip-path="url(#clip0_127_1311)">
                <path d="M26.4338 0H27.8298C30.4395 0 32.9424 1.0367 34.7877 2.88205C36.6331 4.7274 37.6698 7.23022 37.6698 9.83994V12.6406C37.6698 15.2503 36.6331 17.7532 34.7877 19.5985C32.9424 21.4439 30.4395 22.4806 27.8298 22.4806H26.4338V0Z" fill="#F24D1D"/>
                <path d="M10.2063 5.77258L11.3285 4.94222C13.4263 3.3899 16.0549 2.73453 18.6359 3.12027C21.217 3.50601 23.5391 4.90128 25.0914 6.99912L26.7573 9.25047C27.5271 10.2889 28.0848 11.4688 28.3984 12.7228C28.7121 13.9768 28.7756 15.2803 28.5853 16.5589C28.3951 17.8375 27.9548 19.066 27.2895 20.1743C26.6243 21.2826 25.7472 22.2491 24.7084 23.0183L23.5863 23.8487L10.2091 5.77051L10.2063 5.77258Z" fill="#FF8577"/>
                <path d="M0.595947 20.0742L1.00409 18.7392C1.7671 16.2436 3.49026 14.1532 5.7945 12.928C8.09874 11.7028 10.7953 11.4432 13.291 12.2062L15.9693 13.025C18.465 13.788 20.5554 15.5112 21.7805 17.8154C23.0057 20.1197 23.2654 22.8162 22.5024 25.3119L22.0942 26.6469L0.595947 20.0742Z" fill="#FFC700"/>
                <path d="M1.37622 37.2734L0.910232 35.9575C0.0390914 33.4975 0.180868 30.7922 1.30438 28.4367C2.42789 26.0812 4.44109 24.2685 6.90112 23.3973L9.54117 22.4624C12.0005 21.5911 14.7052 21.7321 17.0605 22.8545C19.4159 23.9769 21.229 25.9888 22.1012 28.4478L22.5672 29.7637L1.37447 37.2685L1.37622 37.2734Z" fill="#A837DD"/>
                <path d="M12.2413 50.6456L11.084 49.865C8.92046 48.4057 7.42523 46.1466 6.92728 43.5849C6.42932 41.0231 6.96944 38.3685 8.42877 36.2049L9.9949 33.883C11.4543 31.7235 13.7108 30.2313 16.2693 29.7337C18.8278 29.2362 21.4791 29.774 23.6414 31.2291L24.7987 32.0098L12.2326 50.6398L12.2413 50.6456Z" fill="#11A858"/>
                <path d="M28.9155 54.9298L27.5208 54.9907C24.9136 55.1045 22.3679 54.178 20.4439 52.4149C18.5198 50.6518 17.3749 48.1966 17.2611 45.5893L17.1389 42.7913C17.0251 40.1841 17.9516 37.6384 19.7147 35.7143C21.4778 33.7903 23.933 32.6454 26.5403 32.5315L27.9349 32.4706L28.9155 54.9298Z" fill="#F24D1D"/>
                <path d="M44.8772 48.4521L43.7923 49.3307C41.7642 50.973 39.1667 51.7424 36.5713 51.4696C33.9759 51.1969 31.5951 49.9042 29.9528 47.8761L28.1902 45.6995C26.5479 43.6714 25.7785 41.0739 26.0513 38.4785C26.3241 35.8831 27.6167 33.5023 29.6448 31.86L30.7297 30.9815L44.8772 48.4521Z" fill="#FF8577"/>
                <path d="M40.8918 3.71594L42.0821 4.44534C44.3072 5.80891 45.8996 8.00058 46.5088 10.5382C47.118 13.0758 46.6942 15.7515 45.3306 17.9766L43.8673 20.3646C42.5037 22.5897 40.3121 24.1821 37.7745 24.7913C35.2369 25.4005 32.5612 24.9767 30.336 23.6132L29.1458 22.8838L40.8918 3.71594Z" fill="#11A858"/>
                <path d="M52.1301 14.6788L52.653 15.9732C53.6306 18.3929 53.607 21.1018 52.5873 23.504C51.5676 25.9063 49.6354 27.8051 47.2157 28.7827L44.6125 29.8345C42.1928 30.8121 39.4838 30.7885 37.0816 29.7688C34.6793 28.7491 32.7805 26.8168 31.8029 24.3972L31.28 23.1028L52.1301 14.6788Z" fill="#A837DD"/>
                <path d="M53.6594 31.834L53.3099 33.1855C52.6565 35.7121 51.0261 37.8756 48.7775 39.2002C46.5289 40.5247 43.8462 40.9017 41.3197 40.2483L38.6082 39.5471C36.0816 38.8937 33.918 37.2633 32.5935 35.0147C31.269 32.7661 30.892 30.0834 31.5454 27.5568L31.8949 26.2053L53.6594 31.834Z" fill="#FEC700"/>
            </g>
        <defs>
    <clipPath id="clip0_127_1311">
      <rect width="53.3178" height="55" fill="white" transform="translate(0.341064)"/>
    </clipPath>
  </defs>
</svg>
<Typography sx={{
    color: "#294E2C",
    textAlign: "center",
    fontFamily: "Prettywise Variable",
    fontSize: "45px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "35px", /* 77.778% */
    letterSpacing: "1.35px",
    margin:"25px 0"
}}>12K+</Typography>
<Typography sx={{
    color: "#A89C96",
    textAlign: "center",
    fontFamily: "Nexa Bold",
    fontSize: "15px",
    fontStyle: "normal",
    fontHeight: "700",
    lineGeight: "20px", /* 133.333% */
}}>More than twelve hundred<br/> happy customers</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="55" viewBox="0 0 54 55" fill="none">
            <g clip-path="url(#clip0_127_1311)">
                <path d="M26.4338 0H27.8298C30.4395 0 32.9424 1.0367 34.7877 2.88205C36.6331 4.7274 37.6698 7.23022 37.6698 9.83994V12.6406C37.6698 15.2503 36.6331 17.7532 34.7877 19.5985C32.9424 21.4439 30.4395 22.4806 27.8298 22.4806H26.4338V0Z" fill="#F24D1D"/>
                <path d="M10.2063 5.77258L11.3285 4.94222C13.4263 3.3899 16.0549 2.73453 18.6359 3.12027C21.217 3.50601 23.5391 4.90128 25.0914 6.99912L26.7573 9.25047C27.5271 10.2889 28.0848 11.4688 28.3984 12.7228C28.7121 13.9768 28.7756 15.2803 28.5853 16.5589C28.3951 17.8375 27.9548 19.066 27.2895 20.1743C26.6243 21.2826 25.7472 22.2491 24.7084 23.0183L23.5863 23.8487L10.2091 5.77051L10.2063 5.77258Z" fill="#FF8577"/>
                <path d="M0.595947 20.0742L1.00409 18.7392C1.7671 16.2436 3.49026 14.1532 5.7945 12.928C8.09874 11.7028 10.7953 11.4432 13.291 12.2062L15.9693 13.025C18.465 13.788 20.5554 15.5112 21.7805 17.8154C23.0057 20.1197 23.2654 22.8162 22.5024 25.3119L22.0942 26.6469L0.595947 20.0742Z" fill="#FFC700"/>
                <path d="M1.37622 37.2734L0.910232 35.9575C0.0390914 33.4975 0.180868 30.7922 1.30438 28.4367C2.42789 26.0812 4.44109 24.2685 6.90112 23.3973L9.54117 22.4624C12.0005 21.5911 14.7052 21.7321 17.0605 22.8545C19.4159 23.9769 21.229 25.9888 22.1012 28.4478L22.5672 29.7637L1.37447 37.2685L1.37622 37.2734Z" fill="#A837DD"/>
                <path d="M12.2413 50.6456L11.084 49.865C8.92046 48.4057 7.42523 46.1466 6.92728 43.5849C6.42932 41.0231 6.96944 38.3685 8.42877 36.2049L9.9949 33.883C11.4543 31.7235 13.7108 30.2313 16.2693 29.7337C18.8278 29.2362 21.4791 29.774 23.6414 31.2291L24.7987 32.0098L12.2326 50.6398L12.2413 50.6456Z" fill="#11A858"/>
                <path d="M28.9155 54.9298L27.5208 54.9907C24.9136 55.1045 22.3679 54.178 20.4439 52.4149C18.5198 50.6518 17.3749 48.1966 17.2611 45.5893L17.1389 42.7913C17.0251 40.1841 17.9516 37.6384 19.7147 35.7143C21.4778 33.7903 23.933 32.6454 26.5403 32.5315L27.9349 32.4706L28.9155 54.9298Z" fill="#F24D1D"/>
                <path d="M44.8772 48.4521L43.7923 49.3307C41.7642 50.973 39.1667 51.7424 36.5713 51.4696C33.9759 51.1969 31.5951 49.9042 29.9528 47.8761L28.1902 45.6995C26.5479 43.6714 25.7785 41.0739 26.0513 38.4785C26.3241 35.8831 27.6167 33.5023 29.6448 31.86L30.7297 30.9815L44.8772 48.4521Z" fill="#FF8577"/>
                <path d="M40.8918 3.71594L42.0821 4.44534C44.3072 5.80891 45.8996 8.00058 46.5088 10.5382C47.118 13.0758 46.6942 15.7515 45.3306 17.9766L43.8673 20.3646C42.5037 22.5897 40.3121 24.1821 37.7745 24.7913C35.2369 25.4005 32.5612 24.9767 30.336 23.6132L29.1458 22.8838L40.8918 3.71594Z" fill="#11A858"/>
                <path d="M52.1301 14.6788L52.653 15.9732C53.6306 18.3929 53.607 21.1018 52.5873 23.504C51.5676 25.9063 49.6354 27.8051 47.2157 28.7827L44.6125 29.8345C42.1928 30.8121 39.4838 30.7885 37.0816 29.7688C34.6793 28.7491 32.7805 26.8168 31.8029 24.3972L31.28 23.1028L52.1301 14.6788Z" fill="#A837DD"/>
                <path d="M53.6594 31.834L53.3099 33.1855C52.6565 35.7121 51.0261 37.8756 48.7775 39.2002C46.5289 40.5247 43.8462 40.9017 41.3197 40.2483L38.6082 39.5471C36.0816 38.8937 33.918 37.2633 32.5935 35.0147C31.269 32.7661 30.892 30.0834 31.5454 27.5568L31.8949 26.2053L53.6594 31.834Z" fill="#FEC700"/>
            </g>
        <defs>
    <clipPath id="clip0_127_1311">
      <rect width="53.3178" height="55" fill="white" transform="translate(0.341064)"/>
    </clipPath>
  </defs>
</svg>
<Typography sx={{
    color: "#294E2C",
    textAlign: "center",
    fontFamily: "Prettywise Variable",
    fontSize: "45px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "35px", /* 77.778% */
    letterSpacing: "1.35px",
    margin:"25px 0"
}}>16+</Typography>
<Typography sx={{
    color: "#A89C96",
    textAlign: "center",
    fontFamily: "Nexa Bold",
    fontSize: "15px",
    fontStyle: "normal",
    fontHeight: "700",
    lineGeight: "20px", /* 133.333% */
}}>We have reached to<br/> countries around the world</Typography>
        </Box>
       
      </Box>
      <Box sx={{position:'absolute',top:"0",right:"0",display:{xs:"none",md:"block"}}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="143" height="198" viewBox="0 0 143 198" fill="none">
  <g filter="url(#filter0_f_127_1477)">
    <path d="M101.449 24.1534C105.873 32.9982 114.005 39.4303 123.631 41.6966C114.786 46.1197 108.354 54.2525 106.088 63.8784C101.665 55.0336 93.5322 48.6015 83.9062 46.3352C92.7511 41.9121 99.1832 33.7793 101.449 24.1534Z" fill="#FFCC6D"/>
  </g>
  <g filter="url(#filter1_f_127_1477)">
    <path d="M23.7023 91.7274C29.8515 100.389 39.5419 105.879 50.1322 106.702C41.4709 112.851 35.9806 122.542 35.1576 133.132C29.0084 124.471 19.318 118.98 8.72769 118.157C17.389 112.008 22.8793 102.318 23.7023 91.7274Z" fill="#FFCC6D"/>
  </g>
  <g filter="url(#filter2_f_127_1477)">
    <path d="M138.434 135.408C142.698 145.137 151.072 152.479 161.275 155.434C151.546 159.698 144.204 168.072 141.249 178.275C136.985 168.547 128.611 161.204 118.408 158.249C128.137 153.985 135.479 145.611 138.434 135.408Z" fill="#FFCC6D"/>
  </g>
  <path d="M169.461 64.4021C179.05 74.3205 192.566 79.4749 206.325 78.4605C196.406 88.0497 191.252 101.565 192.266 115.324C182.677 105.406 169.161 100.251 155.403 101.266C165.321 91.6764 170.475 78.1607 169.461 64.4021Z" fill="#FFCC6D"/>
  <path d="M98.3924 2.27789C98.6584 6.32716 98.5992 10.406 98.215 14.4257C98.1559 14.9281 98.1263 15.4306 98.0376 15.9035C98.0081 16.14 97.9786 16.3764 97.949 16.6129C97.9194 16.9676 98.0377 16.0513 97.949 16.5833C97.9194 16.7311 97.9194 16.9084 97.8898 17.0562C97.742 18.0612 97.5648 19.0661 97.3875 20.071C97.0032 22.0809 96.5008 24.0907 95.9096 26.0415C95.6141 26.9577 95.3185 27.874 94.9933 28.7902C94.816 29.2336 94.6681 29.6769 94.4612 30.1203C94.4317 30.2089 94.3134 30.3568 94.3134 30.475C94.3134 30.1794 94.4908 30.0907 94.3726 30.2976C94.2544 30.5341 94.1657 30.7705 94.0475 31.007C93.3381 32.5735 92.481 34.0809 91.5351 35.4996C91.3282 35.8247 91.0918 36.1498 90.8554 36.475C90.7372 36.6523 90.5893 36.8297 90.4711 37.007C90.412 37.0661 90.3528 37.1548 90.3233 37.2139C90.6189 36.6819 90.4415 37.0661 90.3529 37.1843C89.8209 37.8641 89.2298 38.544 88.6386 39.1942C88.0475 39.8149 87.4563 40.406 86.8061 40.9972C86.5105 41.2632 86.1855 41.5292 85.8603 41.7952C85.7126 41.9134 85.5648 42.0316 85.417 42.1499C85.1805 42.3272 85.8603 41.7952 85.5056 42.0907C85.3874 42.1794 85.2987 42.2385 85.1805 42.3272C84.412 42.8888 83.6139 43.4208 82.7863 43.8937C81.9587 44.3666 81.1017 44.7213 80.2446 45.1646C80.2741 45.1351 80.7469 44.9578 80.4218 45.076C80.3036 45.1351 80.1854 45.1647 80.0672 45.2238C79.8308 45.3124 79.5943 45.4011 79.3283 45.4898C78.8849 45.6375 78.4416 45.7853 77.9687 45.9036C77.0524 46.1696 76.1066 46.3469 75.1608 46.4651C74.6583 46.5243 74.0672 47.0563 73.8307 47.4701C73.5943 47.9134 73.5056 48.3863 73.5647 48.8888C73.7125 49.9528 74.6287 50.81 75.7519 50.81C77.9095 50.7804 80.0671 50.7804 82.2248 50.9282C82.7272 50.9577 83.2002 51.0169 83.7026 51.076C83.7322 51.076 84.2643 51.1646 83.9096 51.1055C83.5253 51.0464 84.0573 51.1351 84.1164 51.1351C84.3824 51.1647 84.6485 51.2238 84.9145 51.2829C85.9785 51.4898 87.013 51.7558 88.0179 52.0809C88.1953 52.14 88.4021 52.2287 88.5795 52.2878C88.6681 52.3173 88.7864 52.3765 88.875 52.406C89.0524 52.4651 89.2297 52.6425 88.7568 52.3469C89.1115 52.5834 89.5549 52.7016 89.9391 52.9085C90.678 53.2927 91.3874 53.7065 92.0377 54.1794C92.215 54.2977 92.3923 54.4159 92.5696 54.5637C92.6287 54.6228 92.7175 54.6819 92.7766 54.7115C93.0721 54.9184 92.6584 54.6228 92.6288 54.5932C92.9244 54.8888 93.3086 55.1548 93.6337 55.4208C94.2839 56.012 94.9046 56.6031 95.4957 57.2533C95.7617 57.5489 96.0278 57.8445 96.2642 58.14C96.3824 58.2878 96.5008 58.4356 96.6485 58.6129C96.8259 58.8494 96.3234 58.1696 96.5894 58.5243C96.678 58.6425 96.7371 58.7312 96.8258 58.8494C97.3282 59.5292 97.7716 60.2386 98.215 60.9479C98.6583 61.6868 99.0722 62.4553 99.4564 63.2238C99.6338 63.608 99.811 63.9922 99.9884 64.3765C100.018 64.4652 100.047 64.5538 100.107 64.613C99.8701 64.0514 100.018 64.3765 100.077 64.5243C100.166 64.7607 100.254 64.9676 100.343 65.2041C101.023 66.9775 101.525 68.7804 101.91 70.6129C102.028 71.145 102.116 71.6474 102.205 72.1795C102.235 72.3864 102.264 72.6228 102.323 72.8297C102.353 73.007 102.383 73.1548 102.383 73.3322C102.383 73.2435 102.353 73.1548 102.353 73.0662C102.353 73.1844 102.383 73.273 102.383 73.3913C102.501 74.4553 102.619 75.4898 102.678 76.5539C103.003 81.4307 102.708 86.3371 102.383 91.1844C102.323 92.278 103.269 93.2238 104.304 93.3716C105.397 93.5194 106.402 92.8396 106.727 91.7756C109.062 84.3568 109.358 76.5243 111.102 68.9873C111.486 67.3026 111.929 65.6179 112.52 63.9627C112.639 63.608 112.786 63.2533 112.905 62.9282C112.964 62.7509 113.082 62.5735 113.141 62.3667C113.141 62.3962 112.934 62.8691 113.082 62.544C113.111 62.4553 113.171 62.3371 113.2 62.2484C113.525 61.5391 113.85 60.8593 114.205 60.1795C114.915 58.8198 115.742 57.5194 116.658 56.3075C116.717 56.2484 116.777 56.1597 116.806 56.1006C116.511 56.544 116.599 56.3666 116.688 56.2484C116.806 56.1006 116.924 55.9528 117.043 55.805C117.279 55.5095 117.545 55.2139 117.811 54.9183C118.313 54.3568 118.846 53.8248 119.378 53.3519C119.703 53.0563 119.998 52.7903 120.353 52.5243C120.412 52.4651 120.471 52.4356 120.56 52.3765C120.028 52.7903 120.412 52.4947 120.501 52.406C120.678 52.2878 120.826 52.1696 121.003 52.0514C121.653 51.608 122.333 51.1942 123.043 50.8395C123.22 50.7509 123.427 50.6622 123.604 50.5735C123.693 50.544 123.752 50.5144 123.841 50.4848C124.254 50.3075 123.397 50.6622 123.782 50.5144C124.166 50.3666 124.55 50.2189 124.964 50.1006C125.378 49.9824 125.762 49.8641 126.176 49.7755C126.353 49.7459 126.56 49.6868 126.737 49.6573C126.915 49.6277 127.742 49.5095 126.974 49.5981C127.565 49.5095 128.126 49.4208 128.54 48.9479C128.865 48.5932 129.072 48.1794 129.161 47.677C129.309 46.672 128.658 45.4602 127.565 45.2533C126.708 45.076 125.851 44.8691 124.993 44.6031C124.609 44.4848 124.254 44.3371 123.87 44.2188C123.663 44.1302 123.456 44.0415 123.25 43.9824C123.929 44.2484 123.161 43.9232 122.983 43.8641C121.417 43.1252 119.91 42.2385 118.52 41.204C118.461 41.1449 118.373 41.0858 118.314 41.0563C118.018 40.8198 118.432 41.1449 118.461 41.1745C118.314 41.0267 118.107 40.9085 117.929 40.7607C117.575 40.4651 117.249 40.1991 116.924 39.9036C116.274 39.3124 115.624 38.6917 115.033 38.0119C114.442 37.3617 113.88 36.7114 113.318 36.0316C113.259 35.9429 113.2 35.8543 113.112 35.7656C113.141 35.7952 113.437 36.1794 113.2 35.8838C113.052 35.7065 112.934 35.5292 112.786 35.3518C112.52 34.9972 112.254 34.6129 112.018 34.2582C111.043 32.8099 110.185 31.273 109.417 29.7065C109.24 29.3223 109.062 28.9676 108.885 28.5833C108.826 28.4947 108.796 28.3764 108.767 28.2878C108.619 27.9627 108.826 28.406 108.826 28.4356C108.737 28.1695 108.619 27.9331 108.53 27.6966C108.205 26.8986 107.91 26.071 107.614 25.2434C106.373 21.6079 105.456 17.8543 104.717 14.071C104.304 11.9725 103.919 9.84441 103.594 7.71633C103.447 6.7114 103.299 5.73604 103.151 4.73111C103.092 4.22864 103.003 3.75574 102.944 3.25327C102.914 3.07593 102.796 2.24834 102.914 2.98726C102.885 2.72125 102.855 2.4848 102.826 2.21879C102.737 1.5981 102.619 1.09562 102.176 0.652271C101.791 0.268034 101.171 -0.0275186 100.609 0.00203809C100.048 0.0315948 99.4267 0.20892 99.0425 0.652271C98.6583 1.12518 98.3037 1.71631 98.3924 2.27789C99.4268 10.0513 100.609 17.9134 103.003 25.3912C105.309 32.5144 109.062 39.3124 114.944 44.0711C118.284 46.7607 122.126 48.8297 126.353 49.6277C126.56 48.1794 126.737 46.7311 126.944 45.2829C125.112 45.5193 123.427 45.9922 121.713 46.7312C120.205 47.3814 118.816 48.2681 117.515 49.3026C114.974 51.2829 112.875 53.8543 111.22 56.6031C109.476 59.4701 108.205 62.6326 107.348 65.8839C106.313 69.7262 105.722 73.6869 105.131 77.6179C104.481 82.0514 103.801 86.4849 102.442 90.7706C103.89 90.9775 105.338 91.1549 106.786 91.3618C107.348 82.613 107.85 73.4504 104.895 65.0268C102.442 57.9923 97.6238 51.4011 90.6189 48.4454C85.9193 46.4651 80.7765 46.406 75.7519 46.4651C75.9588 47.9134 76.1361 49.3617 76.343 50.81C83.7913 49.7755 90.146 44.9578 94.4908 39.0464C99.3085 32.4848 101.407 24.2385 102.412 16.2582C103.003 11.6178 103.121 6.94784 102.796 2.30744C102.708 1.15473 101.821 0.0315731 100.58 0.0906865C99.4564 0.120243 98.3037 1.03651 98.3924 2.27789Z" fill="#231F20"/>
  <path d="M16.3138 62.3662C16.8162 64.5829 17.2596 66.8292 17.6438 69.0755C17.8507 70.1691 18.0281 71.2627 18.1759 72.3563C18.2646 72.9179 18.3532 73.4499 18.4123 74.0115C18.4419 74.2479 18.4714 74.5139 18.5009 74.7504C18.56 75.1642 18.5009 74.78 18.5009 74.7209C18.5305 74.8982 18.5601 75.0755 18.5601 75.2824C19.1512 79.7455 19.5059 84.2086 19.6832 88.7012C19.7719 90.6224 19.772 92.514 19.6538 94.4352C19.6242 94.8785 19.5945 95.3219 19.5354 95.7652C19.5059 96.0017 19.4764 96.2381 19.4468 96.4746C19.4172 96.711 19.5059 96.8884 19.4468 96.4155C19.4764 96.5633 19.3876 96.7406 19.3876 96.8884C19.2398 97.8046 19.0625 98.6913 18.7965 99.578C18.6783 100.021 18.5305 100.435 18.3827 100.879C18.3236 101.056 18.2055 101.263 18.1759 101.44C18.2941 100.997 18.2941 101.204 18.2349 101.322C18.1758 101.47 18.1167 101.588 18.0576 101.736C17.6438 102.593 17.1709 103.391 16.6093 104.159C16.4615 104.337 16.3433 104.544 16.1956 104.721C16.2251 104.662 16.4912 104.337 16.2547 104.632C16.1956 104.721 16.1365 104.81 16.0478 104.869C15.7522 105.253 15.427 105.637 15.1019 106.021C14.4812 106.731 13.8015 107.44 13.1217 108.12C12.3828 108.859 11.6142 109.539 10.8162 110.218C10.4024 110.573 9.98866 110.928 9.54531 111.253C9.45664 111.342 9.33841 111.43 9.24974 111.489C9.19063 111.519 8.83595 111.815 9.10196 111.608C9.39753 111.401 8.98373 111.696 8.95418 111.726C8.83595 111.815 8.68823 111.903 8.57 112.021C6.7966 113.322 4.96408 114.534 3.10201 115.686C2.30398 116.189 1.77185 117.253 2.09697 118.199C2.39254 119.085 3.24974 119.883 4.22511 119.824C6.08718 119.706 7.94925 119.617 9.84088 119.706C11.0823 119.765 12.3236 119.883 13.5355 120.031C14.2153 120.09 14.8655 120.149 15.5453 120.209C15.7522 120.209 15.9591 120.238 16.166 120.268C16.2251 120.268 16.2547 120.268 16.3138 120.297C16.5502 120.327 16.4911 120.327 16.1364 120.268C16.1955 120.297 16.3434 120.297 16.4025 120.297C16.8754 120.386 17.3483 120.475 17.8212 120.622C18.235 120.741 18.6488 120.888 19.033 121.036C19.1513 121.066 19.24 121.125 19.3582 121.154C19.6538 121.273 18.8261 120.918 19.2694 121.125C19.5059 121.243 19.7129 121.332 19.9493 121.45C20.7769 121.864 21.5454 122.337 22.2843 122.869C22.3729 122.928 22.4616 123.016 22.5503 123.076C22.8754 123.312 22.4616 123.016 22.4321 122.987C22.5207 123.135 22.8458 123.312 22.964 123.43C23.3483 123.755 23.703 124.081 24.0577 124.406C24.7375 125.056 25.4173 125.765 26.0084 126.475C26.304 126.829 26.5995 127.184 26.8656 127.539C26.57 127.125 27.1907 127.952 26.8656 127.539C26.9247 127.627 26.9838 127.686 27.0429 127.775C27.2203 128.012 27.3975 128.248 27.5453 128.484C28.1069 129.283 28.6389 130.081 29.1413 130.908C30.2349 132.711 31.2399 134.603 32.1562 136.494C32.6586 137.529 33.1611 138.593 33.634 139.627C33.7522 139.864 33.8409 140.1 33.9592 140.337C34.0183 140.455 34.0774 140.603 34.1365 140.721C34.2843 141.105 34.1365 140.75 34.1069 140.662C34.373 141.253 34.5798 141.844 34.8163 142.435C36.7375 147.283 38.2153 152.278 39.2498 157.391C39.4567 158.485 40.6686 159.105 41.6735 158.987C42.8558 158.839 43.4764 157.923 43.5947 156.8C44.6292 147.903 42.3828 139.066 42.9148 130.14C42.9443 129.43 43.033 128.721 43.0922 128.041C43.1217 127.864 43.1513 127.686 43.1513 127.509C43.1809 127.214 43.0626 128.13 43.1217 127.686C43.1217 127.598 43.1513 127.539 43.1513 127.45C43.2104 127.066 43.2694 126.682 43.3285 126.297C43.5946 124.79 43.9492 123.282 44.363 121.834C44.5995 121.066 44.8359 120.297 45.1019 119.529C45.2202 119.174 45.3385 118.849 45.4863 118.524C45.5454 118.347 45.634 118.169 45.6931 117.992C45.8409 117.667 45.634 118.14 45.6045 118.169C45.6636 118.051 45.6931 117.933 45.7523 117.815C46.3729 116.425 47.0823 115.066 47.9394 113.795C48.1463 113.47 48.3829 113.145 48.6193 112.819C48.6489 112.76 48.9148 112.435 48.6488 112.76C48.4123 113.085 48.6784 112.731 48.7375 112.672C48.8557 112.524 48.9739 112.376 49.1217 112.228C49.6241 111.637 50.1858 111.076 50.7769 110.573C50.9247 110.425 51.102 110.307 51.2498 110.189C51.4567 110.012 50.836 110.484 51.0725 110.337C51.1611 110.278 51.2498 110.218 51.3384 110.13C51.6636 109.923 51.9592 109.716 52.3139 109.509C52.639 109.332 52.9641 109.154 53.2892 109.007C53.3483 108.977 53.703 108.829 53.3188 108.977C52.9641 109.125 53.2597 109.007 53.3484 108.977C53.5553 108.888 53.7621 108.829 53.969 108.77C54.8557 108.475 55.6537 107.617 55.5946 106.642C55.5355 105.637 54.9443 104.839 53.969 104.514C50.1857 103.243 46.2252 102.711 42.4124 101.499C41.9691 101.351 41.5257 101.204 41.0824 101.026C40.9937 100.997 40.9049 100.967 40.8162 100.938C40.7571 100.908 40.3729 100.701 40.698 100.879C41.0232 101.056 40.6389 100.849 40.5798 100.819C40.4616 100.76 40.3139 100.701 40.1957 100.642C39.3385 100.258 38.5404 99.7849 37.7719 99.2529C37.6537 99.1642 37.5354 99.0756 37.4172 99.0165C37.1512 98.8391 37.4764 99.1051 37.5355 99.1051C37.4469 99.1347 37.0625 98.7209 36.9739 98.6322C36.5896 98.2775 36.2054 97.9229 35.8508 97.5386C35.5552 97.2135 35.2596 96.8588 34.9641 96.5042C34.8163 96.3268 34.6685 96.1495 34.5207 95.9721C34.9049 96.4155 34.6686 96.1494 34.5799 96.0312C34.4912 95.913 34.4025 95.7652 34.2843 95.647C33.2203 94.1987 32.3335 92.6618 31.5355 91.0657C31.3286 90.6519 31.1512 90.2677 30.9739 89.8539C30.8852 89.6766 30.7966 89.4992 30.7375 89.2923C30.6784 89.2036 30.6488 89.0854 30.5897 88.9967C30.4124 88.583 30.7671 89.4105 30.5897 89.0263C30.2351 88.1692 29.9098 87.2824 29.5847 86.4253C28.2546 82.7603 27.2202 78.977 26.0675 75.2529C24.4714 70.2283 22.6094 65.2923 20.1857 60.6223C19.6537 59.5878 18.1168 59.2036 17.1414 59.8243C16.0774 60.5041 15.7818 61.7455 16.3433 62.8686C16.9345 63.9918 17.4961 65.1445 18.0281 66.2972C18.2646 66.8292 18.5306 67.3612 18.7375 67.8933C18.7079 67.8342 18.5601 67.4499 18.7079 67.8342C18.767 67.9524 18.8261 68.1002 18.8853 68.2184C19.0035 68.5139 19.1216 68.8095 19.2398 69.0755C20.0674 71.1445 20.8064 73.243 21.4862 75.3711C22.7276 79.1839 23.7917 83.0558 25.0922 86.8391C26.3335 90.445 27.841 94.0214 29.9986 97.1839C31.1513 98.8687 32.4517 100.583 34.0478 101.883C35.7621 103.332 37.6538 104.366 39.7523 105.164C43.9494 106.79 48.5011 107.263 52.7572 108.681C52.7572 107.263 52.7572 105.844 52.7572 104.396C46.3139 106.465 42.6192 112.879 40.5798 118.908C39.5158 122.012 38.8656 125.263 38.5405 128.514C38.1267 132.711 38.4222 136.967 38.7768 141.164C39.1906 146.337 39.6931 151.509 39.102 156.682C40.5503 156.475 41.9986 156.297 43.4469 156.09C42.5011 151.45 41.1709 146.869 39.5158 142.435C37.831 137.972 35.8507 133.568 33.4566 129.43C31.4172 125.943 28.9641 122.544 25.8311 119.972C24.1168 118.583 22.3433 117.46 20.2743 116.662C18.4418 115.923 16.5207 115.716 14.5699 115.539C13.1512 115.42 11.7621 115.243 10.3434 115.154C8.24487 115.036 6.17585 115.125 4.07732 115.243C4.46156 116.632 4.81618 117.992 5.20042 119.381C8.68811 117.223 12.0872 114.859 15.1315 112.051C18.1463 109.243 20.9543 106.021 22.4616 102.149C23.9099 98.4253 24.1463 94.2578 24.0577 90.2677C23.969 85.7455 23.6142 81.2233 23.0822 76.7603C22.4615 71.4992 21.5748 66.2381 20.4221 61.0657C20.1561 59.9425 18.7966 59.174 17.703 59.5287C16.6685 60.0312 16.0182 61.1544 16.3138 62.3662Z" fill="#231F20"/>
  <path d="M132.59 121.895C133.004 123.521 133.329 125.146 133.565 126.831C133.536 126.624 133.506 126.447 133.476 126.24C133.92 129.521 133.979 132.89 133.536 136.171C133.565 135.964 133.595 135.787 133.624 135.58C133.27 138.24 132.59 140.841 131.555 143.294C131.644 143.117 131.703 142.94 131.792 142.762C131.289 143.945 130.728 145.097 130.048 146.191C129.723 146.752 129.339 147.314 128.954 147.846C128.777 148.082 128.6 148.319 128.422 148.555C128.895 147.935 128.511 148.437 128.393 148.585C128.275 148.733 128.156 148.88 128.038 148.999C127.21 150.004 126.265 150.92 125.289 151.777C125.053 151.984 124.787 152.191 124.55 152.398C124.403 152.516 123.9 152.9 124.521 152.427C124.373 152.516 124.255 152.634 124.107 152.752C123.546 153.166 122.954 153.55 122.363 153.935C121.24 154.614 120.117 155.206 118.905 155.708C119.082 155.619 119.26 155.56 119.437 155.472C118.58 155.826 117.723 156.181 116.866 156.565C116.275 156.831 115.713 157.068 115.27 157.511C114.265 158.457 114.442 160.082 115.476 160.88C116.009 161.294 116.718 161.412 117.339 161.59C118.403 161.915 119.467 162.299 120.501 162.743C120.324 162.654 120.147 162.595 119.969 162.506C122.777 163.718 125.496 165.225 127.92 167.058C127.979 167.117 128.038 167.146 128.097 167.206C127.595 166.821 127.802 166.999 127.92 167.058C128.068 167.176 128.186 167.265 128.334 167.383C128.6 167.59 128.866 167.826 129.102 168.033C129.546 168.447 129.989 168.861 130.403 169.334C130.61 169.541 130.787 169.777 130.994 170.013C131.082 170.132 131.171 170.25 131.26 170.368C131.348 170.486 131.496 170.693 131.083 170.161C131.142 170.25 131.201 170.309 131.26 170.398C131.614 170.871 131.969 171.373 132.265 171.905C133.033 173.117 133.654 174.417 134.245 175.747C134.156 175.57 134.097 175.393 134.009 175.215C136.137 180.299 137.112 185.767 138.058 191.176C138.294 192.624 138.56 194.073 138.826 195.521C138.915 196.023 139.417 196.615 139.831 196.851C140.275 197.087 140.748 197.176 141.25 197.117C142.344 196.969 143.142 196.053 143.171 194.93C143.26 192.477 143.348 190.023 143.437 187.541C143.526 185.176 143.526 182.782 143.851 180.417C143.821 180.624 143.792 180.802 143.762 181.009C144.058 178.969 144.501 176.93 145.033 174.949C145.299 173.974 145.595 172.999 145.89 172.023C146.156 171.225 146.393 170.398 146.718 169.6C146.629 169.777 146.57 169.954 146.481 170.132C146.895 169.186 147.427 168.299 148.048 167.472C148.137 167.353 148.225 167.235 148.314 167.087C148.521 166.821 147.93 167.56 148.255 167.146C148.462 166.88 148.669 166.644 148.876 166.378C149.26 165.905 149.674 165.462 150.087 165.018C150.974 164.102 151.92 163.215 152.895 162.358C153.132 162.151 153.368 161.974 153.605 161.767C153.723 161.678 153.841 161.59 153.959 161.472C154.018 161.412 154.077 161.353 154.166 161.324C154.077 161.383 153.723 161.678 153.989 161.442C154.462 161.087 154.964 160.733 155.437 160.378C156.413 159.728 157.417 159.107 158.511 158.664C158.334 158.752 158.156 158.812 157.979 158.9C158.068 158.871 158.156 158.841 158.245 158.782C158.777 158.575 159.28 158.279 159.575 157.777C159.812 157.334 159.9 156.861 159.841 156.358C159.693 155.265 158.777 154.437 157.654 154.437C157.151 154.437 156.649 154.408 156.176 154.348C156.383 154.378 156.56 154.408 156.767 154.437C155.792 154.289 154.816 154.023 153.9 153.639C154.078 153.728 154.255 153.787 154.432 153.876C153.871 153.639 153.339 153.373 152.836 153.048C152.57 152.9 152.334 152.723 152.068 152.575C151.95 152.486 151.802 152.398 151.683 152.309C151.624 152.279 151.565 152.22 151.506 152.191C151.477 152.161 151.447 152.132 151.417 152.132C151.211 151.954 151.713 152.368 151.683 152.339C150.679 151.511 149.733 150.624 148.846 149.649C148.639 149.383 148.403 149.146 148.196 148.88C148.107 148.762 147.989 148.614 147.9 148.496C147.664 148.201 148.137 148.792 148.048 148.674C147.989 148.585 147.93 148.526 147.871 148.437C147.427 147.876 147.043 147.284 146.629 146.693C145.802 145.452 145.063 144.151 144.383 142.821C143.585 141.284 142.846 139.688 142.166 138.092C142.255 138.27 142.314 138.447 142.403 138.624C140.422 133.925 138.885 129.018 137.614 124.053C137.319 122.9 137.053 121.777 136.787 120.624C136.521 119.501 135.161 118.733 134.068 119.087C132.944 119.56 132.294 120.683 132.59 121.895C133.21 124.585 133.89 127.275 134.688 129.935C135.605 133.038 136.669 136.142 137.881 139.156C139.181 142.319 140.629 145.452 142.462 148.348C144.087 150.949 146.038 153.491 148.432 155.412C149.585 156.329 150.797 157.186 152.156 157.777C153.664 158.427 155.142 158.841 156.797 158.989C157.122 159.018 157.447 159.018 157.743 159.018C157.536 157.57 157.358 156.122 157.151 154.674C154.728 155.619 152.629 157.097 150.619 158.723C148.61 160.348 146.718 162.181 145.122 164.22C144.324 165.225 143.585 166.23 142.994 167.383C142.314 168.743 141.871 170.22 141.427 171.669C140.363 175.186 139.506 178.762 139.24 182.427C139.092 184.496 139.063 186.595 139.004 188.664C138.945 190.792 138.856 192.89 138.797 195.018C140.245 194.812 141.693 194.634 143.142 194.427C142.078 188.546 141.279 182.575 139.388 176.9C138.412 174.033 137.201 171.166 135.427 168.683C134.541 167.412 133.536 166.23 132.413 165.166C131.112 163.984 129.664 162.92 128.186 161.974C126.56 160.91 124.846 159.964 123.073 159.166C122.068 158.693 121.033 158.279 119.969 157.895C119.112 157.6 118.255 157.363 117.398 157.097C117.575 157.186 117.752 157.245 117.93 157.334C118.196 157.6 118.432 157.836 118.698 158.102C118.787 158.279 118.846 158.457 118.935 158.634C118.964 158.841 118.994 159.018 119.023 159.225C118.994 159.432 118.964 159.61 118.935 159.816C118.846 159.994 118.787 160.171 118.698 160.348C118.521 160.614 118.284 160.94 118.018 161.058C118.078 161.028 118.107 160.999 118.166 160.969C118.314 160.88 118.462 160.821 118.61 160.733C119.023 160.526 119.467 160.348 119.91 160.171C119.733 160.26 119.555 160.319 119.378 160.408C120.59 159.905 121.831 159.403 123.013 158.782C124.373 158.073 125.644 157.245 126.856 156.329C129.427 154.348 131.644 152.013 133.388 149.294C136.757 144.122 138.235 137.856 138.265 131.738C138.265 128.073 137.762 124.378 136.876 120.831C136.58 119.708 135.28 118.91 134.156 119.294C132.974 119.56 132.265 120.683 132.59 121.895Z" fill="#231F20"/>
  <defs>
    <filter id="filter0_f_127_1477" x="76.1294" y="16.3765" width="55.2786" height="55.2787" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="3.8884" result="effect1_foregroundBlur_127_1477"/>
    </filter>
    <filter id="filter1_f_127_1477" x="0.374331" y="83.3741" width="58.1112" height="58.1112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="4.17666" result="effect1_foregroundBlur_127_1477"/>
    </filter>
    <filter id="filter2_f_127_1477" x="110.054" y="127.055" width="59.5743" height="59.5743" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="4.17666" result="effect1_foregroundBlur_127_1477"/>
    </filter>
  </defs>
</svg>
      </Box>
    </Container>
  )
}

export default RatedSec