"use client";

import { Box, Stack, Typography } from "@mui/material";
import enduro1 from "./assets/events/b1.JPG";
import enduro2 from "./assets/events/b2.JPG";
import enduro3 from "./assets/events/s1.JPG";
import enduro4 from "./assets/events/s2.JPG";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MdOutlineArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

export default function Enduro() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.fromTo(
      ".image",
      { backgroundPosition: "center -300px" },
      {
        backgroundPosition: "center 0",
        scrollTrigger: {
          trigger: ".image",
          start: "top bottom",
          end: "center top",
          scrub: true,
          //   markers: true,
        },
      }
    )
      .fromTo(
        ".image3",
        { backgroundPosition: "center -150px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image3",
            start: "top bottom",
            end: "center top",
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".image2",
        { backgroundPosition: "center -300px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image2",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".image4",
        { backgroundPosition: "center -150px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image4",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        }
      );
  });
  return (
    <Stack margin={{ md: "0 50px", xs: "20px" }} gap={"10px"}>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        textAlign={"center"}
        fontWeight={"bold"}
        padding={"20px 0"}
      >
        Events at Sky Textiles
      </Typography>
      <Stack
        display={{ md: "flex", xs: "none" }}
        width={"100%"}
        alignItems={"end"}
        height={{ lg: "80vh", md: "55vh" }}
        direction={"row"}
        gap={"10px"}
      >
        <Stack
          width={"40%"}
          height={"70%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro3.src})`,
            // backgroundSize: "cover",
            backgroundSize: "160%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundSize: "175%",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)", // Black overlay with 20% opacity
              zIndex: 1,
            },
          }}
          className="image3"
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "0",
              width: "100%",
              padding: "20px",
              zIndex: 3,
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Enterpreneur's Launchpad</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
              sx={{
                transition: "all 0.4s ease",
                cursor: "pointer",
                "&: hover": {
                  scale: "1.6",
                },
              }}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Stack>
        <Box
          width={"60%"}
          height={"100%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro1.src})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 0px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundSize: "175%",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)", // Black overlay with 20% opacity
              zIndex: 1,
            },
          }}
          className="image"
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "0",
              width: "100%",
              zIndex: 3,
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Bharat-Tex</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
              sx={{
                transition: "all 0.4s ease",
                cursor: "pointer",
                "&: hover": {
                  scale: "1.6",
                },
              }}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack
        display={{ md: "flex", xs: "none" }}
        width={"100%"}
        alignItems={"start"}
        height={{ lg: "80vh", md: "55vh" }}
        direction={"row"}
        gap={"10px"}
      >
        <Box
          width={"60%"}
          height={"100%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro2.src})`,
            backgroundSize: "150%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 0px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundSize: "175%",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)", // Black overlay with 20% opacity
              zIndex: 1,
            },
          }}
          className="image2"
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "0",
              width: "100%",
              zIndex: 3,
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Emerging Legends of Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
              sx={{
                transition: "all 0.4s ease",
                cursor: "pointer",
                "&: hover": {
                  scale: "1.6",
                },
              }}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
        <Box
          width={"40%"}
          height={"70%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro4.src})`,
            backgroundSize: "160%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundSize: "175%",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)", // Black overlay with 20% opacity
              zIndex: 1,
            },
          }}
          className="image4"
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "0",
              width: "100%",
              zIndex: 3,
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">x Vibrant Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
              sx={{
                transition: "all 0.4s ease",
                cursor: "pointer",
                "&: hover": {
                  scale: "1.6",
                },
              }}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack width={"100%"} gap={"10px"} display={{ md: "none" }}>
        <Box
          width={"100%"}
          height={"40vh"}
          position="relative"
          sx={{
            backgroundImage: `url(${enduro1.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "5%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Emerging Legends of Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
        <Box
          position="relative"
          width={"100%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro2.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "5%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white"></Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
        <Box
          width={"100%"}
          position="relative"
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro3.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "5%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Enterpreneur's Launchpad</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
        <Box
          position="relative"
          width={"100%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro4.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "5%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Vibrant Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
