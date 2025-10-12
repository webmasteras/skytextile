"use client";

import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavbarAdminHorizontal from "../navbarAdmin/NavbarAdminHorizontal";
import NavbarAdmin from "../navbarAdmin/NavbarAdminVerticle";
import {
  Container,
  InnerContainer,
  InnerContainerHeadSection,
} from "@/app/styledComponents/admin/Container";
import {
  InnerContainerHead,
  MainHead,
} from "@/app/styledComponents/admin/AdminHead";
import {
  GrayButtonSmall,
  GreenButtonSmall,
  RedButtonSmall,
  StatusLabel,
  StyledButton,
  YellowButtonSmall,
} from "@/app/styledComponents/admin/Buttons";
import { SearchInput } from "@/app/styledComponents/admin/Inputs";

import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/VisibilityOff";
import UnblockIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import AddDepartment from "./parts/AddDepartment";
import axios from "axios";
import EditBlog from "./parts/EditBlog";
import { useRouter } from "next/navigation";
import { Auth } from "../../context/Auth";

export default function Departments() {
  const [viewForm, setViewForm] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const router = useRouter();
  const { tokens, setTokens } = useContext(Auth);
   
  useEffect(() => {
    if (typeof window !== "undefined") {
      const UserData = localStorage.getItem("UserData");
      if (UserData) {
        setTokens(JSON.parse(UserData));
      } else {
        router.push("/admin/login");
      }
    }
  }, [router]);
  console.log("tokens", tokens);


  // Fetch departments data from API
  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        "https://skytextiles.in/api/v1/event/get-all"
      );
      if (response.status === 200) {
        setDepartments(response.data.message);
      } else {
        alert("Failed to fetch departments data.");
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      alert("An error occurred while fetching the data.");
    } finally {
      setLoading(false);
    }
  };

  // Handle block/unblock blog
  const handleToggleBlock = async (id, isBlocked) => {
    try {
      const endpoint = isBlocked
        ? `https://skytextiles.in/api/v1/event/unblock-event/${id}`
        : `https://skytextiles.in/api/v1/event/block-event/${id}`;

      const response = await axios.put(endpoint);

      if (response.data.statusCode === 200) {
        // alert(`Blog ${isBlocked ? "unblocked" : "blocked"} successfully!`);
        fetchDepartments();
      } else {
        alert("Failed to update the event status.");
      }
    } catch (error) {
      console.error("Error updating event status:", error);
      alert("An error occurred. Please check the console for details.");
    }
  };
  const handleDeleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await axios.get(
        `https://skytextiles.in/api/v1/event/delete/${id}`
      );

      if (response.data.statusCode === 200) {
        alert("Event deleted successfully!");
        fetchDepartments();
      } else {
        alert("Failed to delete the event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      alert(
        "An error occurred while deleting the event. Please check the console for details."
      );
    }
  };

  const handleEditClick = (blog) => {
    setCurrentBlog(blog);
    setEditModalOpen(true);
  };

  // Handle input changes
  const handleUpdateBlog = async () => {
    const formData = new FormData();
    formData.append("title", editData.title);
    formData.append("content", editData.content);
    formData.append("slug", editData.slug);
    if (editData.image) {
      formData.append("image", editData.image);
    }

    try {
      const response = await axios.post(
        `https://skytextiles.in/api/v1/event/update/${currentBlog._id}`,
        formData
      );

      if (response.data.statusCode === 200) {
        alert("Event updated successfully!");
        fetchDepartments();
        setEditModalOpen(false);
      } else {
        alert("Failed to update the Event.");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      alert("An error occurred while updating the event.");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack width={"100%"} position={"relative"}>
          <Container>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <MainHead>Events</MainHead>
              <StyledButton onClick={() => setViewForm(true)}>
                Add Events
              </StyledButton>
            </Stack>
            {viewForm && (
              <AddDepartment
                setLoading={setLoading}
                loading={loading}
                setViewForm={setViewForm}
                fetchDepartments={fetchDepartments}
              />
            )}
            <InnerContainer>
              <TableContainer>
                <Table
                  sx={{ minWidth: 650 }}
                  size="large"
                  aria-label="Departments"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Slug</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={6} align="center">
                          Loading...
                        </TableCell>
                      </TableRow>
                    ) : (
                      departments.map((department, index) => (
                        <TableRow
                          key={department._id}
                          sx={{
                            backgroundColor: "white",
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{department.title}</TableCell>
                          <TableCell>
                            <Image
                              src={department.image || "/placeholder.jpg"}
                              alt={department.title}
                              width={50}
                              height={50}
                            />
                          </TableCell>
                          <TableCell>{department.slug}</TableCell>
                          <TableCell>
                            <StatusLabel
                              status={
                                department.isBlocked ? "Blocked" : "Active"
                              }
                            >
                              {department.isBlocked ? "Blocked" : "Active"}
                            </StatusLabel>
                          </TableCell>
                          <TableCell>
                            <Stack direction={"row"} gap={"8px"}>
                              <GreenButtonSmall
                                onClick={() =>
                                  handleToggleBlock(
                                    department._id,
                                    department.isBlocked
                                  )
                                }
                              >
                                {department.isBlocked ? (
                                  <BlockIcon
                                    sx={{
                                      width: "15px",
                                      height: "15px",
                                      color: "red",
                                    }}
                                  />
                                ) : (
                                  <UnblockIcon
                                    sx={{
                                      width: "15px",
                                      height: "15px",
                                      color: "green",
                                    }}
                                  />
                                )}
                              </GreenButtonSmall>
                              <YellowButtonSmall
                                onClick={() => handleEditClick(department)}
                              >
                                <EditIcon
                                  sx={{ width: "15px", height: "15px" }}
                                />
                              </YellowButtonSmall>
                              <RedButtonSmall
                                onClick={() => handleDeleteBlog(department._id)}
                              >
                                <DeleteIcon
                                  sx={{ width: "15px", height: "15px" }}
                                />
                              </RedButtonSmall>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </InnerContainer>
            {editModalOpen && currentBlog && (
              <EditBlog
                setEditModalOpen={setEditModalOpen}
                fetchDepartments={fetchDepartments}
                blog={currentBlog}
              />
            )}
          </Container>
        </Stack>
      </Stack>
    </Stack>
  );
}
