import { Box, Button, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'

const SideBackGround = () => {
  return (
    <Box sx={{position:'relative'}}>
        <Box sx={{position:'absolute',display:{xs:"none",md:"block"},right:"0",zIndex:'111'}}>
            <Box sx={{position:'absolute',
            right:"-10px",
            width:" 69.655px",
            height: "100.714px",
            top:"156px"
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="102" viewBox="0 0 71 102" fill="none">
            <path d="M66.8121 37.0649C65.1795 39.5016 63.3639 40.4641 60.8054 43.0592C46.1853 57.862 43.2613 71.5928 44.7477 92.1219C44.9304 94.5586 44.7478 96.9222 43.0543 98.7132C41.3608 100.504 39.4602 100.784 36.9626 100.931C25.4736 101.601 13.8141 101.649 2.30073 101.211C1.41372 99.95 0.852716 98.4892 0.668043 96.9587C0.55992 96.6051 0.52672 96.2328 0.570778 95.8657C0.614835 95.4985 0.735131 95.1446 0.923848 94.8266C1.2528 94.1444 1.75232 94.4489 2.14219 94.4002C3.10799 94.3593 4.04485 94.0581 4.85343 93.5283C5.662 92.9986 6.31223 92.26 6.73538 91.3909C7.42984 89.6487 6.84514 88.0161 6.54055 86.4322C2.50783 65.4036 1.55734 46.1537 10.9264 27.0379C13.2351 22.0831 16.3336 17.5363 20.1006 13.5752C26.436 6.50878 33.8191 2.02527 43.176 0.940945C46.3991 0.549732 49.669 0.879047 52.7493 1.90512C55.8297 2.9312 58.6437 4.62843 60.9883 6.87428C64.4165 9.75565 67.0374 13.4781 68.5944 17.6769C70.1513 21.8758 70.591 26.4071 69.8701 30.827C69.5168 33.617 68.4081 34.6404 66.7877 37.0649" fill="#294E2C"/>
            </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"50px",
            width: "59.698px",
            height: "105.983px",
            top:"156px"
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="106" viewBox="0 0 61 106" fill="none">
                <path d="M58.3083 33.7349C57.0899 36.3056 55.5304 37.2194 53.4349 40.1068C41.5682 56.6154 42.8229 72.5027 46.8922 92.0084C47.3674 94.2989 47.5868 96.8818 46.1004 98.8677C44.614 100.854 42.8353 101.414 40.3742 101.95C29.103 104.197 17.6718 105.55 6.1874 105.995C5.13571 104.817 4.3797 103.405 3.98213 101.877C3.83435 101.528 3.75815 101.153 3.75815 100.774C3.75815 100.396 3.83435 100.021 3.98213 99.6718C4.21361 98.9286 4.74969 99.1844 5.20047 99.0992C6.15433 98.9523 7.04809 98.5412 7.78024 97.9124C8.51238 97.2836 9.05351 96.4623 9.34273 95.5416C9.79352 93.6897 8.94069 91.8865 8.44116 90.3514C1.83773 69.7004 -2.08515 48.9886 3.76291 28.5326C4.95875 23.6433 7.07119 19.0254 9.98849 14.9236C12.2328 11.2734 15.1961 8.11775 18.698 5.6484C22.2 3.17905 26.1673 1.44763 30.3592 0.55937C33.5347 -0.14737 36.8245 -0.169574 40.0093 0.494266C43.194 1.15811 46.2008 2.49276 48.8295 4.40935C52.5903 6.87657 55.6491 10.2744 57.7092 14.2728C59.7693 18.2712 60.7604 22.7344 60.5864 27.2289C60.5864 30.0433 59.5876 31.1642 58.3448 33.7349" fill="#294E2C"/>
                </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"-7px",
            width: "102.498px",
            height: "176.687px",
            top:"44px"
            }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="103" height="178" viewBox="0 0 103 178" fill="none">
                <path d="M102.929 126.462C102.944 134.62 100.899 142.649 96.9829 149.805C93.0105 157.047 87.45 163.295 80.7182 168.081C74.2418 172.698 66.7415 175.675 58.8612 176.755C54.7517 177.34 50.5799 177.34 46.4704 176.755C39.0248 175.885 31.8971 173.24 25.6856 169.043C19.6566 165.005 14.6911 159.572 11.2115 153.205C7.57515 146.64 5.74617 139.228 5.91162 131.725C6.00909 126.754 6.64284 121.869 7.04489 117.008C7.44695 112.146 8.20226 107.261 8.20226 102.473C8.21637 89.4451 7.26744 76.4343 5.36342 63.5466C4.83953 59.8915 4.14501 56.334 3.46273 52.7033C3.06068 50.559 2.58575 48.5244 2.17151 46.4045C1.75728 44.2845 1.26994 43.0053 0.953168 40.6661C0.466465 38.2865 0.31867 35.85 0.514432 33.4291C0.789953 29.9551 1.61231 26.5464 2.95112 23.329C5.88833 16.7299 10.5785 11.0623 16.5115 6.94227C21.2752 3.77457 26.3557 1.27694 32.35 0.716504C47.9935 -0.745511 63.3446 5.45586 70.6791 19.3694C81.1203 39.1553 88.1745 58.2711 94.7414 79.251C98.1284 90.0821 99.8339 101.51 101.54 112.816C102.359 117.318 102.823 121.876 102.929 126.45" fill="#294E2C"/>
                </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"19px",
            width: "110.747px",
            height: "77.801px",
            top:"32px",
            zIndex:"111"
            }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="111" height="79" viewBox="0 0 111 79" fill="none">
            <path d="M46.8344 70.2439C29.3755 61.8007 18.3252 49.398 8.23726 33.1696C5.4838 28.7227 3.46122 24.2635 1.09763 19.5242C0.772373 19.0615 0.552267 18.5335 0.452164 17.9769C0.232862 16.9169 -0.37631 14.9067 0.452164 13.2741C1.36641 11.3523 2.60258 9.60111 4.1072 8.09611C5.81112 6.42455 7.62211 4.86581 9.52878 3.42982C9.96738 3.12524 10.5156 2.75973 10.9785 2.47951C11.4175 2.20624 11.8827 1.97768 12.3673 1.79724C12.8485 1.58891 13.3513 1.43366 13.8662 1.33427C14.4332 1.16562 15.0177 1.06341 15.6083 1.02968C16.425 0.953453 17.2488 1.01523 18.045 1.21243C19.9012 1.85969 21.5733 2.94653 22.9184 4.38013C34.2734 17.3921 43.6301 28.747 61.1011 33.2062C67.3269 34.8022 73.2847 33.4133 80.083 33.8885C86.8814 34.3636 94.0818 32.597 100.417 37.2267C110.871 44.8901 113.088 55.6359 108.532 67.6853C107.613 69.8063 106.181 71.6654 104.365 73.0948C100.198 76.4492 95.0851 78.4135 89.7444 78.7114C84.7858 79.0647 80.3023 78.2728 75.7701 77.7489C65.4994 76.5305 56.0694 74.7761 46.7734 70.2804" fill="#345737"/>
            </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"53px",
            width: "37.785px",
            height: "41.432px",
            top:"54px",
            zIndex:"1"
            }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="39" height="42" viewBox="0 0 39 42" fill="none">
                <path d="M37.9833 7.31415C38.1438 8.90073 38.2009 10.4961 38.1541 12.0901C38.0144 21.5659 34.4182 30.6645 28.0418 37.6753C26.1533 39.6247 24.1918 41.3303 21.3531 41.6471C20.0331 41.78 18.7002 41.6136 17.4535 41.16C16.2069 40.7065 15.0787 39.9776 14.1527 39.0277C13.6421 38.5065 13.1962 37.9256 12.8246 37.2976C12.7684 37.2083 12.7194 37.1146 12.6783 37.0174C12.1421 36.1316 11.3646 35.4169 10.4367 34.9573C9.50884 34.4977 8.46925 34.3121 7.43964 34.4223C6.40694 34.5092 5.42044 34.889 4.59604 35.517C3.77165 36.145 3.14351 36.9952 2.78548 37.9677C2.76414 38.0686 2.73135 38.1666 2.68792 38.2601C2.55039 38.6851 2.36659 39.0937 2.13972 39.4785C1.87169 37.1027 1.5671 34.7757 1.22596 32.4608C0.945743 30.3774 0.629045 28.3794 0.385376 26.3691C0.708676 26.2117 1.01145 26.0153 1.28694 25.7843L1.55494 25.5893C2.84134 24.5785 4.37044 23.9231 5.98959 23.6887L6.90335 23.6034C8.53923 23.5221 10.1672 23.8797 11.6185 24.639L11.9231 24.7852C12.7781 25.2413 13.7483 25.4362 14.7131 25.3457C15.7505 25.2383 16.729 24.8127 17.5151 24.1273C17.7901 23.936 18.0364 23.7062 18.2462 23.445C19.7258 21.8268 20.8493 19.9159 21.544 17.8361C22.2387 15.7563 22.4891 13.5539 22.279 11.3713C22.1602 10.0438 21.8695 8.73731 21.414 7.48473C21.0722 6.34568 21.1891 5.11809 21.74 4.06412C22.2909 3.01016 23.2319 2.21333 24.3623 1.84379C26.4789 1.0914 28.6805 0.604406 30.9169 0.393956C31.6601 0.320855 32.4034 0.296469 33.1466 0.259918C34.2134 0.267371 35.2443 0.645961 36.0624 1.33069C36.8806 2.01542 37.4347 2.96361 37.63 4.01244C37.8127 5.10895 37.9591 6.21764 38.0687 7.31415" fill="white"/>
                </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"91px",
            width: "42.278px",
            height: "69.867px",
            top:"36px"
            }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="44" height="71" viewBox="0 0 44 71" fill="none">
                <path d="M40.0534 61.8155C37.9622 65.0042 34.966 67.4955 31.4494 68.97C27.9328 70.4445 24.056 70.835 20.316 70.0914C16.576 69.3479 13.1434 67.5042 10.4583 64.7967C7.77309 62.0892 5.95776 58.6414 5.24519 54.8953C3.5911 46.44 2.41569 37.898 1.7243 29.3101C1.27351 23.7301 0.956816 18.15 0.883715 12.5944C0.841008 12.0999 0.841008 11.6026 0.883715 11.108C1.0468 9.21394 1.85525 7.4333 3.17406 6.06404C4.81883 4.23653 7.09721 3.55426 9.33896 2.76234C11.7979 1.95628 14.3095 1.32123 16.8561 0.861723C17.4896 0.776439 18.0744 0.739898 18.708 0.64243C19.2419 0.575285 19.7823 0.575285 20.3163 0.64243C20.8374 0.6811 21.3525 0.779192 21.8514 0.934821C23.3547 1.27432 24.7517 1.97709 25.9205 2.98163C26.3061 3.29218 26.6612 3.63897 26.9806 4.01723C28.1033 5.42277 28.8832 7.07045 29.2587 8.82971C31.9025 17.8089 34.8266 26.6541 38.1649 35.3287C39.2858 38.3015 40.4799 41.2011 41.6861 44.1373C42.8687 46.9798 43.3358 50.069 43.0469 53.1341C42.758 56.1992 41.7218 59.1466 40.029 61.7181" fill="#294E2C"/>
                </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"33px",
            width: "94.605px",
            height: "71.823px",
            top:"-9px"
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="72" viewBox="0 0 95 72" fill="none">
            <path d="M93.2215 25.4452C92.3969 22.5981 91.2138 19.8675 89.7006 17.3188C90.1599 13.6786 89.3509 9.99123 87.4099 6.87756C86.9248 6.12644 86.3246 5.4563 85.6312 4.89167C85.4462 4.72149 85.2509 4.56281 85.0464 4.41652C82.6145 2.50357 79.5355 1.60826 76.457 1.91891C76.2194 1.94031 75.9836 1.97693 75.7506 2.02855C74.915 2.14317 74.0966 2.36003 73.3139 2.67427C73.1726 2.68518 73.0353 2.72676 72.9118 2.79612C68.6963 0.469076 63.896 0.261944 59.2176 0.0791924C56.4641 -0.0263975 53.678 -0.0263975 50.8596 0.0791924C49.4219 0.17666 47.9723 0.274133 46.5225 0.408151L45.4502 0.505621C42.5056 0.778885 39.6486 1.65386 37.0559 3.07633C35.4939 2.85228 33.9099 2.82364 32.3408 2.99106C31.9293 3.01647 31.5213 3.08174 31.1224 3.18598C27.1828 3.77599 23.4835 5.44511 20.4343 8.0084C17.385 10.5717 15.1048 13.9291 13.8464 17.7087C13.6322 18.377 13.4533 19.0562 13.3104 19.7433C12.4941 19.9139 11.6778 20.0844 10.8737 20.2794C4.66013 21.6561 -1.65085 27.1509 0.566542 34.2538C1.93109 38.6398 7.46232 47.8627 10.5569 51.7249C14.5044 56.6592 19.7309 60.1192 23.2276 59.8878H23.3617C24.7277 59.896 26.0897 60.0306 27.4308 60.2898C30.049 60.7849 32.5373 61.8133 34.7409 63.3113C35.3174 63.6941 35.8596 64.1263 36.3614 64.6028C36.5466 64.7615 36.7419 64.908 36.9462 65.0414C43.3349 69.6043 51.0272 71.9803 58.8764 71.8154C59.8123 71.8146 60.7477 71.7658 61.6786 71.6692C64.9853 71.3695 68.2334 70.6067 71.3278 69.403C78.7416 66.5987 85.0298 61.4383 89.2271 54.7144C93.4243 47.9905 95.2985 40.0747 94.5618 32.1826C94.3508 29.8983 93.9099 27.641 93.2459 25.4452" fill="#294E2C"/>
            </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"90px",
            width: "11.526px",
            height: "10.191px",
            top:"10px",
            zIndex:"1"
            }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
            <path d="M11.8859 3.97188C11.8859 8.11425 6.24476 10.8312 6.24476 10.8312C6.24476 10.8312 5.7696 10.6119 5.02641 10.2098C3.33291 9.21076 0.396902 7.0421 0.360352 4.11807C0.360352 2.15654 1.23742 1.12095 2.34611 0.828544C3.11403 0.643634 3.92338 0.752292 4.61534 1.13321C5.30729 1.51412 5.83201 2.13981 6.08652 2.88755C6.76879 0.45086 10.3384 -0.328889 11.4715 2.19309C11.7173 2.75324 11.8379 3.3603 11.8249 3.97188" fill="#FF5440"/>
            </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"115px",
            width: "11.526px",
            height: "10.191px",
            top:"17px",
            zIndex:"1"
            }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M10.4919 1.18648C11.2519 1.67503 11.82 2.41092 12.1002 3.26984C12.3569 4.35703 12.2932 5.49528 11.9173 6.54719C11.6169 7.49647 11.2632 8.42798 10.8575 9.33721C10.1265 10.7627 9.06628 12.7608 7.28749 12.9313C5.50871 13.1019 4.05896 11.3353 3.10865 10.0682C2.53603 9.25194 1.99986 8.43562 1.48816 7.53405C1.14147 6.92892 0.898698 6.27002 0.769525 5.58469C0.664721 5.18755 0.635704 4.77421 0.684158 4.36634C0.818413 3.47267 1.2472 2.64943 1.9025 2.02714C2.12184 1.82576 2.35388 1.63856 2.59704 1.46669C2.79198 1.36922 2.98694 1.25957 3.23061 1.16211C3.38601 1.09493 3.54993 1.04982 3.71783 1.02809C4.13825 0.88406 4.57748 0.801981 5.02154 0.784422L7.21462 0.577305C7.66743 0.516387 8.1262 0.516387 8.57901 0.577305C8.96845 0.609733 9.35272 0.687421 9.72419 0.808794C9.99782 0.92757 10.2627 1.06601 10.5163 1.22303" fill="#294E2C"/>
            </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"79px",
            width: "48.134px",
            height: "41.292px",
            top:"5px"
            }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="42" viewBox="0 0 49 42" fill="none">
            <path d="M48.5885 10.8247C49.1489 16.685 44.7627 22.2163 39.536 22.8498C38.7441 22.9473 36.3319 23.0935 36.3319 23.0935C35.4306 23.1502 34.5584 23.4354 33.7976 23.922C33.7976 23.922 33.7976 24.9088 33.7976 24.9941C33.8207 27.244 33.3553 29.4721 32.4332 31.5244C31.5804 33.5469 31.3244 40.3452 26.4998 40.796L18.5439 41.5514C13.4756 42.0266 5.60504 32.4016 1.13372 21.2294C0.47851 19.7289 0.328629 18.0561 0.706582 16.463C1.08453 14.8699 1.96982 13.4427 3.22923 12.3964C3.71619 12.0089 4.26375 11.7043 4.84973 11.4948C4.84973 11.4948 4.93513 11.4948 4.97168 11.4948C5.00823 11.4948 5.05682 11.4948 5.12993 11.4339L5.7391 11.2512C5.82438 11.2512 5.89747 11.2512 6.03149 11.2512C10.4906 10.1181 27.4623 6.69455 27.4623 6.69455C27.73 6.02029 28.0734 5.37859 28.4858 4.78176C29.5628 3.1495 31.0847 1.85997 32.8717 1.0658C38.0984 -1.16377 44.0196 1.5775 46.9192 6.1463C47.8286 7.5955 48.3954 9.23309 48.5763 10.9344" fill="white"/>
            </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"102px",
            width: "13.591px",
            height: "26.69px",
            top:"6px"
            }}>
         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="28" viewBox="0 0 15 28" fill="none">
        <path d="M14.0744 10.1903C14.2518 12.2486 14.0071 14.3215 13.3555 16.282C12.5148 18.1976 11.9763 20.2321 11.7594 22.3128C11.6928 23.0708 11.6928 23.8331 11.7594 24.5911V24.7495C11.8525 25.64 12.0239 26.5206 12.2713 27.3811C11.9845 26.5661 11.5509 25.8104 10.992 25.1515C10.6613 24.7016 10.2278 24.3375 9.72753 24.0895C9.2273 23.8415 8.67481 23.7168 8.11655 23.7261H8.04368C4.38864 23.4946 1.17209 18.9623 0.611653 13.1143C-0.0584371 6.02351 4.01069 -0.87233 8.68914 1.00392C10.0642 1.6357 11.2096 2.67866 11.9667 3.98888C13.1347 5.87703 13.8401 8.01436 14.0256 10.2268" fill="white"/>
        </svg>
            </Box>
            <Box sx={{position:'absolute',
            right:"-1px",
            width: "87.535px",
            height: "106.107px",
            top:"26px"
            }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="89" height="107" viewBox="0 0 89 107" fill="none">
            <path d="M87.8709 65.1546C87.9927 67.0208 87.9927 68.8928 87.8709 70.759C87.0632 79.9351 83.0823 88.5428 76.6134 95.1009C70.1446 101.659 61.5925 105.757 52.4282 106.69C43.264 107.624 34.0609 105.334 26.4028 100.214C18.7447 95.0951 13.1104 87.4666 10.4694 78.6417C9.0561 72.1479 7.30182 65.8125 5.42557 59.4406C3.54931 53.0686 0.954238 47.1596 0.552184 40.6659C0.250523 35.7307 0.925747 30.7844 2.53943 26.1107C4.15312 21.437 6.67333 17.1278 9.95569 13.43C13.2381 9.73228 17.2181 6.71872 21.6674 4.56212C26.1167 2.40553 30.948 1.14831 35.8842 0.862526C44.0551 0.347252 52.1739 2.4838 59.0328 6.95425C66.6109 11.9007 71.009 18.9915 74.7859 26.9838C80.573 39.2282 87.14 51.3507 88.0172 65.1668" fill="#294E2C"/>
            </svg>
            </Box>
        </Box>
        <Box sx={{
            position:'absolute',
            height: "71.833px",
            transform: "rotate(0)",
            flexShrink: "0",
            fill: "#FCF3E6",
            top: "-28px",
           
            zIndex: "11",
           
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="83" viewBox="0 0 1440 83" fill="none">
  <g filter="url(#filter0_d_127_1285)">
    <path d="M-18.1 27.9321L-18.1826 3.42219L1440 1.41566L1899.78 0.782982L1899.85 12.5015L1897.57 14.5872L1893.55 18.255L1893.29 23.9255L1898.35 26.7826L1891.52 29.2161L1882.9 33.6095L1871.75 33.1777L1862.7 35.2292L1853.11 35.9896L1844.57 38.3229L1842.24 40.6638L1838.88 42.186L1833.79 46.5037L1824.53 48.2406L1815.23 49.8758L1806.32 52.1097L1794.95 53.7594L1798.12 47.8442L1787.69 48.3557L1777.16 45.5848L1766.34 47.0879L1755.35 47.0628L1745.44 50.5374L1745.64 48.762L1734.67 50.2764L1725.85 53.57L1717.34 54.3433L1713.56 56.837L1703.11 55.9619L1694.76 56.6423L1690.49 59.1293L1682.39 61.5717L1673.43 63.4186L1663.8 61.9363L1654.36 62.6651L1645.61 60.3609L1636.09 61.2024L1625.19 56.8335L1623.12 58.9585L1613.62 59.5755L1603.21 59.0468L1593.1 61.0853L1582.5 59.2529L1572.64 61.4731L1562.56 62.6346L1557.99 58.3845L1550.42 48.6236L1540.45 51.4461L1530.49 49.0791L1523.72 46.3636L1515.44 48.5625L1505.68 46.4592L1494.62 45.823L1484.29 47.8221L1475.47 49.9638L1468.92 53.4965L1460.57 56.5421L1451.14 57.2708L1440 61.5L1429.38 55.1898L1420.02 53.8687L1409.25 51.7521L1400 53.8966L1391.79 57.2065L1382.91 59.5931L1373.99 60.0532L1364.19 57.318L1359.35 55.5376L1353.22 49.6672L1343.76 52.374L1336.63 50.2727L1326.91 50.514L1316.81 49.1267L1307.08 50.1226L1297.38 52.6068L1296.14 51.8916L1289.77 54.3525L1284.15 58.001L1276.78 60.8665L1267.71 52.2605L1260.83 48.8524L1251.72 47.1523L1242.84 51.782L1233.02 57.4126L1222.48 61.1057L1214.33 57.7371L1210.07 53.597L1204.65 49.4956L1196.65 54.5167L1189.11 50.0937L1179.88 48.8329L1171.38 46.3129L1161.44 53.8796L1152.03 53.1196L1142.89 51.9295L1134.29 49.2676L1124.68 49.4266L1115.44 48.0944L1105.95 49.7819L1098.62 48.9462L1088.59 51.9017L1079.5 56.4513L1068.16 57.9687L1057.77 58.1638L1046.8 60.351L1037.43 56.3486L1029.61 52.8451L1018.65 51.5862L1017.7 48.6566L1009.06 49.6041L1000.89 48.3766L1002.79 44.744L991.633 45.5969L983.386 46.7251L974.955 49.4757L965.088 50.911L954.284 49.2635L945.101 50.0517L938.482 49.2212L932.736 46.8349L926.684 43.3598L918.062 43.777L912.142 47.5602L906.018 43.8919L895.871 45.7621L885.835 48.5851L874.314 47.7889L870.759 48.9743L860.038 46.4699L867.093 43.5658L860.551 40.7263L851.549 39.6066L842.649 40.617L836.428 44.2086L826.444 43.8808L816.026 44.6674L805.334 46.975L795.21 43.8241L784.351 44.675L781.456 41.29L776.536 38.4391L774.83 39.1341L770.295 41.623L762.62 44.0726L752.762 41.0932L742.275 39.3008L732.68 36.2889L722.875 33.4111L714.188 31.8202L705.191 31.2205L696.139 33.4656L687.917 32.7891L686.456 33.2887L677.032 32.2026L666.804 32.3353L656.586 34.2522L646.366 35.7103L636.006 34.3554L631.095 38.9777L623.529 41.7834L613.846 41.6167L606.155 44.3111L598.345 41.8679L590.922 39.2181L582.963 38.346L580.704 38.0152L578.47 39.0503L577.416 39.7918L566.288 42.6836L563.275 40.3393L562.468 38.0306L553.875 37.2649L542.448 34.6329L533.6 38.4875L523.985 40.7774L512.809 38.7146L504.041 44.098L493.327 42.5723L487.434 36.272L484.7 39.1662L472.341 36.9281L466.091 41.6924L456.297 43.4737L449.603 47.7415L439.151 48.6812L436.136 48.8451L427.62 46.264L416.925 48.0415L414.198 46.1031L408.544 47.3559L403.949 45.716L397.472 42.1624L391.737 38.6341L387.915 33.6243L379.366 31.3596L378.002 39.1686L367.806 41.7277L361.091 45.3838L350.189 44.8382L343.327 38.7996L332.598 37.7022L322.046 36.7157L311.491 35.3316L302.277 36.8336L295.056 41.5129L285.055 41.226L277.352 44.8585L267.222 46.6015L261.048 40.4153L250.432 40.6323L239.467 44.41L237.783 37.0403L226.577 38.7806L216.043 40.7914L211.293 45.7287L202.624 47.1249L194.912 49.0548L186.76 51.4568L178.505 54.1246L173.904 60.2129L169.293 55.9631L160.304 54.0481L157.591 48.5921L150.728 45.3267L143.322 42.4932L131.52 44.9003L131.669 46.1635L124.471 45.7143L117.237 42.2985L106.31 43.4251L99.561 47.3772L92.0458 52.8639L80.5824 52.883L70.2872 50.6305L70.8984 46.701L65.5079 53.5594L61.4513 59.3788L52.407 62.7964L43.4 60.7082L33.4643 62.5415L24.1532 59.701L14.0842 62.8403L3.89876 61.2905L-3.25853 55.886L-7.96777 49.975L-15.4919 45.1849L-13.4287 39.2979L-15.381 34.3158L-14.4831 34.0342L-18.0644 27.993L-18.1 27.9321Z" fill="#FCF3E6"/>
  </g>
  <defs>
    <filter id="filter0_d_127_1285" x="-27.1826" y="0.782959" width="1936.03" height="81.6357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="10"/>
      <feGaussianBlur stdDeviation="4.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_127_1285"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_127_1285" result="shape"/>
    </filter>
  </defs>
</svg>
        </Box>
       
        
       <Box  sx={{
        backgroundColor:"#0F391C",
           height:"266px",
        borderRadius:"35px",
        background: "url(https://s3-alpha-sig.figma.com/img/dd68/a42f/ed1fb375aa20b37b66ae12dabd00f731?Expires=1693180800&Signature=MOgOfPMGB~nLRP2SNrJKfE-bJfaIMn~~Pp9zBaSYsmW~wuCLOxjNgxYO0bQV-8qwX6iT7ad3IJtXcYxbUycBe5ag13-niCyMRIV7DcfWIxGpbYX~786tzAFWdVeYP0DHzIQ2Nucn5H8GwoE-nBiGjDbI0LnirfOO0I4nZxW4f-IVH68xN1GVF0G2PmGTLNrVodNpmIgNBuOJayJTNFJD3eYjXDZuJBE~apRUgscTtdMRGsgnecyWCqt2HiIXBeKV5wjw1~Kv8oiJbuyQKe2C45Kzj5TJsQF72~ZbpApknjJiGinmztc~HofoIg9V~xiIBOMNyQXBAOiF32tJBNMnBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4), lightgray 50% / cover no-repeat",
       position:"relative"
         
    }}>
       
       <Box 
        sx={{
          width: "100%",
          height: "100%",
          
          background:" #294E2C",
          position: "absolute",
          top: 0,
          left:0,
          right:0,
          bottom:0,
          borderRadius: "35px",
          opacity: "0.9",
         }}
       >
         <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            height:"136px",
            width:{xs:"100%",md:"90%"},
            position:'absolute',
            top:"50%",
            transform:'translateY(-50%)',
         }}>
         <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           
            

          }}>
           <Box sx={{
    display:"flex",
    alignItems:"center",
    gap:{md:"20px"},
    justifyContent:"center",
   
  }}>
    <Typography sx={{
      color: "#FFA16C",
      textAlign: "center",
      textShadow:" 0px 4px 0px rgba(0, 0, 0, 0.25)",
      fontFamily: "Jost",
      fontSize: {xs:"14px",sm:"25px",md:"45px"},
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight:" 65px", /* 144.444% */
      letterSpacing: "-1.35px",
      textTransform: "uppercase",
    }}>
       Morning's
    </Typography>
   <Box sx={{
    width: {xs:"70px",sm:"206.43px",md:"206.43px"},
    height: {xs:"25px",sm:"51px",md:"83.955px"},
    borderRadius: "79.016px",
   backgroundColor:"rgba(0, 0, 0, 0.20)",
   position:'relative',
   }}>
<CardMedia
 component="img"
 sx={{ borderRadius: "79.016px",}}
 height="100%"
 width="100%"
 image="https://s3-alpha-sig.figma.com/img/ee7e/5825/cee03abccf25b63a9eaf50806b5cc34c?Expires=1693180800&Signature=FPzwwO9739oyhCxqqgo8BD-09mrumS3RbaTco9ag9dWsHCCBPD0OWFTq6Zbi9KbTqmnEUG3GONfYx74R4ZBjqDrBV2f~bqW-ZRQLmz3Sz8xzPF7p2oqpGWv-i4OxUxphZ0W8raT56JV88IQ-PxbFc~sHrNrdgUFL5O3Zsw7ioNnOFOd2J0j96vikcNQaqgkqm5H62T0AGefYzxqUedvZeiTi3Njvjmx~WAQc3J2bPMUL7GDGsKf~6aQdLJ9sPVR2umlaHD6zJPS6bXhsVb8T74ROwuaskAguaqlBCNW1LoGJ5ygmBFAg~01EfY6F9yvxcr5gNk71qykDCEhXpglO2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
 alt="Paella dish"
/>

   </Box>
   <Typography sx={{
  color: "#FFA16C",
  textAlign: "center",
  textShadow:" 0px 4px 0px rgba(0, 0, 0, 0.25)",
  fontFamily: "Jost",
  fontSize: {xs:"14px",sm:"25px",md:"45px"},
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight:" 65px", /* 144.444% */
  letterSpacing: "-1.35px",
  textTransform: "uppercase",

}}>
embrace, coffee's allure;
</Typography>
            </Box>
          </Box>
          <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           
            

          }}>
           <Box sx={{
    display:"flex",
    alignItems:"center",
    gap:{md:"20px"},
    justifyContent:"center",
   
  }}>
    <Typography sx={{
      color: "#FFA16C",
      textAlign: "center",
      textShadow:" 0px 4px 0px rgba(0, 0, 0, 0.25)",
      fontFamily: "Jost",
      fontSize: {xs:"14px",sm:"25px",md:"45px"},
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight:" 65px", /* 144.444% */
      letterSpacing: "-1.35px",
      textTransform: "uppercase",
     
    }}>
       dance of awakening
    </Typography>
   <Box sx={{
    width: {xs:"70px",sm:"206.43px",md:"206.43px"},
    height: {xs:"25px",sm:"51px",md:"83.955px"},
    borderRadius: "79.016px",
   backgroundColor:"rgba(0, 0, 0, 0.20)",
   position:'relative',
   }}>
<CardMedia
 component="img"
 sx={{ borderRadius: "79.016px",}}
 height="100%"
 width="100%"
 image="https://s3-alpha-sig.figma.com/img/dae4/f778/90b6f751e598a7e7642fc7849564c332?Expires=1693180800&Signature=MKNXf70Lzq7Za3jcWudKaZ8QaYTKrEz~8BKWJp7oHOF2o5armCQtXxGskqnOaycyDv5UbPCreB8zsxEmscktG1E~DEkNlhlbllApe6~OpykwP~xY--7E4GM1hVjkyeCD38yg3mfexTDZjjkkpiocPXVsQq16b4bmHjayqqLoSADcfCwMSOhQ31M-TVWX4o3T4YFxv~6kjea9yg~glkdk6TWtBrIdNBh1z-jBgj-kKIvHJsqiyT5t4gN~No~ob0AK2SAf0EJm5II9hmuhGfjun~9NeQRwQQXp6qq81asAmvA2iKkiQUM7TopUHIy2BKUzCsMs~nri1iorgqiGtZS0yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
 alt="Paella dish"
/>

   </Box>
   <Typography sx={{
  color: "#FFA16C",
  textAlign: "center",
  textShadow:" 0px 4px 0px rgba(0, 0, 0, 0.25)",
  fontFamily: "Jost",
  fontSize: {xs:"14px",sm:"25px",md:"45px"},
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight:" 65px", /* 144.444% */
  letterSpacing: "-1.35px",
  textTransform: "uppercase",
  
}}>
souls.
</Typography>
            </Box>
          </Box>
         </Box>
        </Box>
         
       </Box>
       
      
       
    
        <Box sx={{
            position:'absolute',
            height: "71.833px",
            
            flexShrink: "0",
            fill: "#FCF3E6",
            bottom: "-32px",
           
            zIndex: "111",
           
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="40" viewBox="0 0 1440 40" fill="none">
  <path d="M1689.87 48.0338L1689.74 72.5438L-612.244 64.3459L-1338.08 61.7611L-1338.07 50.0423L-1334.45 47.9727L-1328.07 44.333L-1327.59 38.6645L-1335.55 35.7721L-1324.74 33.3864L-1311.1 29.0535L-1293.5 29.5632L-1279.19 27.5752L-1264.04 26.8819L-1250.54 24.6084L-1246.83 22.2839L-1241.51 20.7852L-1233.44 16.5032L-1218.79 14.8312L-1204.09 13.2612L-1190 11.0896L-1172.04 9.51955L-1177.11 15.4124L-1160.63 14.974L-1144.04 17.8184L-1126.94 16.3911L-1109.6 16.493L-1093.92 13.0879L-1094.25 14.8618L-1076.91 13.4243L-1062.96 10.1924L-1049.51 9.47877L-1043.52 7.01154L-1027.04 7.95969L-1013.84 7.33779L-1007.07 4.88076L-994.265 2.49509L-980.092 0.710938L-964.92 2.2606L-949.996 1.59792L-936.217 3.96319L-921.182 3.18836L-904.008 7.63345L-900.721 5.52305L-885.714 4.97251L-869.288 5.57403L-853.305 3.60636L-836.602 5.51285L-821.009 3.36168L-805.083 2.2708L-797.904 6.55276L-786.059 16.3664L-770.298 13.6137L-754.598 16.0503L-743.938 18.8132L-730.85 16.6722L-715.456 18.8438L-698 19.5575L-681.683 17.6306L-667.733 15.5508L-657.345 12.064L-644.145 9.07685L-629.249 8.41416L-611.614 4.26304L-594.908 10.6474L-580.154 12.034L-563.173 14.2259L-548.554 12.1461L-535.549 8.89386L-521.514 6.56936L-507.426 6.17175L-491.977 8.97542L-484.365 10.7896L-474.738 16.7028L-459.784 14.0623L-448.539 16.2135L-433.198 16.0401L-417.274 17.498L-401.905 16.5703L-386.562 14.154L-384.614 14.8779L-374.533 12.4616L-365.62 8.85255L-353.952 6.03869L-339.721 14.708L-328.895 18.1642L-314.53 19.928L-300.466 15.3605L-284.904 9.79881L-268.224 6.17953L-255.392 9.6051L-248.715 13.7749L-240.199 17.9142L-227.527 12.9491L-215.671 17.4248L-201.111 18.7502L-187.722 21.3295L-171.94 13.8326L-157.102 14.6584L-142.681 15.9124L-129.125 18.6345L-113.952 18.5428L-99.392 19.9395L-84.3839 18.3185L-72.8307 19.2055L-56.9583 16.3202L-42.56 11.8344L-24.6435 10.3963L-8.24484 10.274L9.10232 8.1636L23.8543 12.2315L36.1566 15.7896L53.4449 17.1251L54.9175 20.0613L68.5605 19.1744L81.4499 20.459L78.4116 24.0782L96.0359 23.3034L109.067 22.2329L122.405 19.5414L137.998 18.1752L155.035 19.8982L169.541 19.1744L179.981 20.0511L189.027 22.4776L198.545 25.9949L212.16 25.6381L221.546 21.8965L231.175 25.6075L247.214 23.8084L263.086 21.0557L281.265 21.9325L286.891 20.772L303.788 23.3514L292.62 26.206L302.919 29.0912L317.117 30.2739L331.178 29.3257L341.037 25.7778L356.795 26.1754L373.25 25.4618L390.152 23.229L406.101 26.4507L423.253 25.6759L427.787 29.081L435.524 31.9663L438.225 31.2832L445.411 28.8262L457.552 26.4303L473.084 29.4787L489.621 31.3444L504.735 34.4233L520.184 37.3697L533.881 39.0213L548.079 39.684L562.392 37.5023L575.365 38.2363L577.676 37.7469L592.543 38.899L608.69 38.8378L624.84 36.9925L640.99 35.6059L657.331 37.0333L665.131 32.4454L677.106 29.6928L692.39 29.9272L704.559 27.2867L716.863 29.7845L728.553 32.4862L741.109 33.414L744.672 33.7606L748.209 32.7411L749.88 32.0071L767.479 29.1932L772.21 31.5585L773.46 33.8728L787.018 34.6986L805.029 37.4105L819.037 33.6179L834.24 31.3953L851.861 33.5363L865.759 28.2145L882.658 29.8151L891.895 36.1565L896.241 33.2815L915.727 35.6059L925.644 30.8856L941.125 29.1728L951.737 24.952L968.247 24.0854L973.008 23.9427L986.425 26.5832L1003.33 24.8806L1007.61 26.8381L1016.55 25.6249L1023.79 27.2969L1033.97 30.8958L1042.99 34.4641L1048.97 39.5005L1062.45 41.825L1064.68 34.0257L1080.8 31.5381L1091.44 27.929L1108.65 28.5509L1119.42 34.6374L1136.34 35.8099L1152.99 36.8701L1169.64 38.3281L1184.2 36.8905L1195.65 32.2619L1211.43 32.6188L1223.63 29.0403L1239.64 27.3683L1249.32 33.5975L1266.08 33.4548L1283.43 29.7539L1286.02 37.1352L1303.72 35.4734L1320.38 33.5363L1327.92 28.6325L1341.62 27.2969L1353.82 25.421L1366.71 23.0761L1379.77 20.4661L1387.1 14.4102L1394.34 18.6922L1408.51 20.67L1412.73 26.1448L1423.53 29.4583L1435.19 32.3435L1453.85 30.019L1453.63 28.7548L1464.99 29.2544L1476.37 32.7207L1493.63 31.6706L1504.33 27.7659L1516.25 22.3319L1534.35 22.393L1550.58 24.7175L1549.57 28.6427L1558.15 21.8221L1564.62 16.0312L1578.93 12.677L1593.13 14.8282L1608.83 13.0645L1623.5 15.9701L1639.43 12.9013L1655.49 14.5224L1666.73 19.9768L1674.11 25.9205L1685.93 30.7632L1682.62 36.6357L1685.64 41.6313L1684.22 41.9066L1689.81 47.9727L1689.87 48.0338Z" fill="#FCF3E6"/>
</svg>
        </Box>
       
    </Box>
  )
}

export default SideBackGround
