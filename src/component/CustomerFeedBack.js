import { Avatar, Box, Container, Rating, Typography } from '@mui/material'
import React from 'react'

const CustomerFeedBack = () => {
  return (
    <Container sx={{position:'relative',marginBottom:"100px"}}>
        <Box sx={{position:'absolute',
        width: "111.702px",
        height: "91.704px",
        transform: "rotate(18.012deg)",
            top: "36px",
            left: "-50px",
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="138" viewBox="0 0 127 138" fill="none">
            <path d="M52.958 4.80894C44.9935 8.38527 38.265 14.499 33.6955 21.923C29.1073 29.3928 26.6545 38.0993 27.0925 46.8861C27.5168 55.3901 30.6584 63.691 35.6475 70.5623C38.1402 74.0025 41.1338 77.1011 44.5003 79.6996C47.8905 82.3184 51.7359 84.5238 55.8142 85.8631C60.0153 87.2414 64.7579 87.7291 68.8993 85.8506C73.2708 83.8517 76.8898 80.2043 79.2249 76.0379C81.5823 71.8165 83.0457 66.9562 82.9919 62.1015C82.9667 59.9468 82.7102 57.784 81.8854 55.7863C81.1536 54.0074 80.0668 52.3411 78.7772 50.9129C76.3625 48.2297 72.7916 45.7939 69.0021 46.3531C67.0504 46.6416 65.2132 47.7553 63.6203 48.8717C61.7714 50.1727 60.063 51.7332 58.6496 53.4877C57.2565 55.2183 56.2313 57.2791 55.2763 59.2721C54.2193 61.4907 53.3183 63.7723 52.5639 66.1133C51.0682 70.7897 50.1558 75.6593 49.8898 80.5662C49.6279 85.3573 49.8798 90.3028 50.9977 94.9797C52.0667 99.4874 54.0533 103.705 56.6604 107.522C62.4536 116.02 71.0146 122.052 79.9382 126.897C82.2479 128.151 84.5873 129.331 86.9507 130.479C87.4311 130.716 88.0494 130.4 88.2384 129.932C88.4498 129.41 88.1725 128.881 87.6921 128.645C78.6255 124.232 69.5061 119.212 62.5703 111.746C59.6046 108.552 57.0426 104.966 55.1928 101.018C53.2993 96.9663 52.3544 92.6795 51.9739 88.2368C51.1723 78.9509 52.8273 69.4204 56.6826 60.9395C57.5659 58.9921 58.5192 56.977 59.7929 55.2515C61.0112 53.6102 62.5171 52.1812 64.1362 50.9473C65.5507 49.8762 67.2982 48.6942 69.0113 48.3625C70.5185 48.065 71.9811 48.4322 73.38 49.1151C76.4382 50.6288 78.9654 53.6669 80.1862 56.849C80.8904 58.67 81.0737 60.7499 81.0261 62.7151C80.9699 65.0182 80.5758 67.3127 79.8936 69.5014C78.5479 73.8331 76.2481 77.8857 72.8188 80.9057C71.1732 82.3635 69.2876 83.6497 67.213 84.4006C65.3407 85.0734 63.316 85.2257 61.3403 85.0458C57.2365 84.6671 53.2863 82.9848 49.7692 80.8909C46.3126 78.832 43.1519 76.2526 40.4297 73.2744C35.0109 67.3603 31.1955 59.9606 29.7147 52.0644C28.1888 43.9367 29.3235 35.5615 32.6995 28.0284C36.0645 20.5229 41.5749 13.9914 48.4682 9.50193C50.1474 8.40971 51.9087 7.45739 53.7338 6.63755C54.8892 6.10178 54.1189 4.28605 52.958 4.80894Z" fill="#231F20"/>
            <path d="M80.2612 135.255C80.3461 135.151 80.4365 135.06 80.5305 134.959C80.4733 135.021 80.407 135.08 80.3498 135.142C80.9877 134.514 81.7572 134.036 82.5047 133.559C83.2853 133.053 84.0714 132.56 84.8667 132.071C85.3196 131.795 85.7816 131.523 86.2436 131.251C86.1718 131.297 86.1037 131.333 86.0227 131.375C86.5566 131.058 87.1105 130.769 87.6389 130.439C88.2905 130.041 88.6735 129.278 88.5019 128.515C88.3789 127.975 88.1126 127.472 87.907 126.952C87.714 126.479 87.5339 126.001 87.3759 125.521C87.1905 124.977 87.0181 124.427 86.8639 123.884C86.8838 123.967 86.9074 124.041 86.9365 124.127C86.5159 122.634 86.222 121.118 86.0459 119.574C85.9979 119.139 85.9536 118.694 85.9222 118.244C85.912 118.005 85.7312 117.74 85.5425 117.6C85.3484 117.446 85.0438 117.355 84.7993 117.406C84.5548 117.456 84.3065 117.569 84.155 117.786C83.9999 118.011 83.9439 118.255 83.9613 118.529C84.1603 121.362 84.769 124.158 85.7438 126.814C85.8747 127.176 86.0185 127.533 86.1623 127.89C86.3098 128.237 86.4885 128.587 86.5974 128.951C86.5775 128.868 86.5539 128.795 86.5248 128.708C86.5502 128.804 86.5663 128.896 86.5751 129.006C86.5773 128.922 86.5703 128.833 86.5724 128.749C86.574 128.824 86.5664 128.896 86.5496 128.964C86.5738 128.877 86.5979 128.791 86.613 128.701C86.5999 128.76 86.5739 128.824 86.5425 128.876C86.5851 128.797 86.6276 128.718 86.6793 128.643C86.6442 128.703 86.6036 128.751 86.563 128.798C86.6202 128.736 86.6865 128.678 86.7437 128.615C86.6368 128.722 86.5189 128.802 86.3919 128.879C86.4637 128.833 86.5318 128.797 86.6128 128.755C84.4794 129.994 82.3406 131.22 80.3132 132.62C79.7239 133.022 79.1786 133.473 78.7119 134.021C78.5495 134.211 78.4859 134.527 78.5181 134.764C78.5503 135.001 78.6963 135.274 78.8978 135.408C79.3337 135.755 79.8997 135.675 80.2612 135.255Z" fill="#231F20"/>
            </svg>
        </Box>
       <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:"35px",
        flexDirection:{xs:'column',sm:"row",md:"row"},
        textAlign:{xs:"center",md:"inherit"}
      }}>
       
            <Typography sx={{
                color:"#294E2C",
                fontFamily: "Prettywise Variable",
                fontSize: {xs:"35px",sm:"45px",md:"45px"},
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "55px", /* 122.222% */
                letterSpacing: "1.35px",
                textTransform: "uppercase",
                
                bottom:"0"
            }}>
           customer  feedbacks
            </Typography>
     
       
        <Typography sx={{
            maxWidth:"306px",
            color:"#A89C96",
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight:" 700",
            lineHeight: "20px", 
        }}>Lorem ipsum dolor sit amet consectetur. Nisl sed sapien duis varius risus tincidunt
            . Tristique arcu fames varius tristique tortor augue faucibus nunc. Vitae non purus.</Typography>
      </Box>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:"20px",flexWrap:{xs:"wrap",md:"nowrap"}}}>
        <Box sx={{
                maxHeight:"301px",
                borderRadius: "15px",
                border: "2px solid var(--brown-1, #240F17)",
                background: "#F4EDE7",
                boxShadow: "5px 7px 0px 0px #240F17",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "27px",
                padding:"25px"
            }}>
        <Rating name="customized-10" defaultValue={5} max={5} />
        <Typography sx={{
            color: "#294E2C",
            fontFamily: "Poppins",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "33px", /* 150% */
            textTransform: "uppercase",
        }}>
            Starting my mornings with Crack Inc has become a ritual.
        </Typography>
        <Box sx={{display:'flex',alignItems:"center",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/11d0/487b/5822378f6fa0e76d8767affa3d413609?Expires=1693180800&Signature=AQw17QHCGhqO5bkMuObn5Ddin~lesaIT12KEiTmjW7zQZvooHo3USbi~-GeEV9dZWwFWuP58EaF1YUYbsyi3tSS-eN~Y4sTUM~9AZUFnI5tDPan9RMGvOJ7E2NOkFr2b5dHddHtpDJKB7-jmfGpCoOm331dGnfpDOlSPWuLwOyHfdgONiEdGC-XRRxqayv6o2XBPici8nLE7BmSBtAM2SWWcrXRQDxFrMTEuIRXnzvL2qDZiXf1QkjaUgbqV-iHGybHXqSkZBN3TJGxz9NYOdq8umfP7~j~v3yLOOWyl0F0Q3UBHB1IGLa-6k7djcx3QViNg5nE6y1~smuEM458KPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
       <Typography>
       Tols Es
       </Typography>
        </Box>
        </Box>
        <Box sx={{
                
                borderRadius: "15px",
                border: "2px solid var(--brown-1, #240F17)",
                background: "#F4EDE7",
                boxShadow: "5px 7px 0px 0px #240F17",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "27px",
                padding:"25px"
            }}>
        <Rating name="customized-10" defaultValue={5} max={5} />
        <Typography sx={{
            color: "#294E2C",
            fontFamily: "Poppins",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "33px", /* 150% */
            textTransform: "uppercase",
        }}>
            Starting my mornings with Crack Inc has become a ritual.
        </Typography>
        <Box sx={{display:'flex',alignItems:"center",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
       <Typography>
       Tols Es
       </Typography>
        </Box>
        </Box>
        <Box sx={{
                maxHeight:"301px",
                borderRadius: "15px",
                border: "2px solid var(--brown-1, #240F17)",
                background: "#F4EDE7",
                boxShadow: "5px 7px 0px 0px #240F17",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "27px",
                padding:"25px"
            }}>
        <Rating name="customized-10" defaultValue={5} max={5} />
        <Typography sx={{
            color: "#294E2C",
            fontFamily: "Poppins",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "33px", /* 150% */
            textTransform: "uppercase",
        }}>
            Starting my mornings with Crack Inc has become a ritual.
        </Typography>
        <Box sx={{display:'flex',alignItems:"center",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/4a54/a325/de54ea00dd640ef9e3f777e16787af13?Expires=1693180800&Signature=ZUA-K9u5HLM4gg4Pbje5SPAUJYvRN-EOE~y3uBklXygdNPK0O4MKYBEhm77c1Afdq0j0kuuhjsQ2xcLrCtMd0DUxWKe7xqA8IJ4uKu~c~s2uVM4FXO-l~-dYwEsTQOIXGub4QDIojfJhXrSZJsRz9T~-f9ZDk38wC-lWmePtVv1Z7AIcG~e1rE4TnagKR7gRNeA9k6c7mq7sf6~Q9yRXHP7RXv-GdyyTn7ZKNLmsEVCFkMu1x1HuxXZX9L2Z-K6SyHv5wPmp1jIl4DD546wBGwhfdxGLpok60TdCUIJluzFlQ6VCmqbxeaNIRtcMQ9c1v8dpmkXgFNeBmiLZHkquBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
       <Typography>
       Tols Es
       </Typography>
        </Box>
        </Box>
      </Box>
      <Box sx={{display:'flex',justifyContent:{xs:"center",sm:"end",md:"end"},gap:"20px",marginTop:"30px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
  <path d="M21.2929 27.2929C20.9024 27.6834 20.9024 28.3166 21.2929 28.7071L27.6569 35.0711C28.0474 35.4616 28.6805 35.4616 29.0711 35.0711C29.4616 34.6805 29.4616 34.0474 29.0711 33.6569L23.4142 28L29.0711 22.3431C29.4616 21.9526 29.4616 21.3195 29.0711 20.9289C28.6805 20.5384 28.0474 20.5384 27.6569 20.9289L21.2929 27.2929ZM36 27H22V29H36V27Z" fill="#240F17"/>
  <rect x="0.75" y="0.75" width="55.5" height="55.5" rx="27.75" stroke="#240F17" stroke-opacity="0.29" stroke-width="1.5"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
  <path d="M36.7071 28.7071C37.0976 28.3166 37.0976 27.6834 36.7071 27.2929L30.3431 20.9289C29.9526 20.5384 29.3195 20.5384 28.9289 20.9289C28.5384 21.3195 28.5384 21.9526 28.9289 22.3431L34.5858 28L28.9289 33.6569C28.5384 34.0474 28.5384 34.6805 28.9289 35.0711C29.3195 35.4616 29.9526 35.4616 30.3431 35.0711L36.7071 28.7071ZM36 27H22V29H36V27Z" fill="#240F17"/>
  <rect x="0.75" y="0.75" width="55.5" height="55.5" rx="27.75" stroke="#240F17" stroke-width="1.5"/>
</svg>
      </Box>
    </Container>
  )
}

export default CustomerFeedBack
