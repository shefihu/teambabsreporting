import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader, ClockLoader, PropagateLoader } from "react-spinners";
import Addadmin from "../../components/admin/modals/AddTeam";
import DeleteAdmin from "../../components/admin/modals/DeleteAdmin";
import { deleteAdmin, fetchTeams } from "../../redux/teamSlice";

const DashboardTeam = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { admins, loadingAdmins, loadingDelete } = useSelector(
    (state) => state.team
  );
    useEffect(() => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  const handleDelete = (id) => {
    dispatch(deleteAdmin(id, token));
  };
  useEffect(() => {
    dispatch(fetchTeams(token));
  }, [dispatch, token]);
  return (
    <div>
      <section className="container mx-auto p-6 mt-20 font-mono">
        <div className="w-full flex justify-end">
          <Addadmin user={user} />
        </div>
        <div className="w-full overflow-hidden mt-10 rounded-lg ">
          <div className="w-full overflow-x-auto">
            <table className="w-full ">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900  uppercase">
                  <th className="px-4 py-3">Name/Role</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Email</th>
                  {user?.role === 1 && <th className="px-4 py-3">Status</th>}
                </tr>
              </thead>
              {loadingAdmins ? (
                <div className="w-full pl-10   flex ">
                  <ClipLoader size={20} color="black" />
                </div>
              ) : (
                <tbody className="bg-white">
                  <>
                    {" "}
                    {admins?.map((admin, index) => {
                      return (
                        <tr key={index} className="text-gray-700">
                          <td className="px-4 py-3 ">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full md:block hidden">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                ></div>
                              </div>
                              <div>
                                <p className="font-semibold text-black">
                                  {admin.name}
                                </p>
                                {admin.super === 1 ? (
                                  <p className="text-xs text-gray-600">
                                    Super Admin
                                  </p>
                                ) : (
                                  <p className="text-xs text-gray-600">Admin</p>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold ">
                            08142347661
                          </td>
                          <td className="px-4 py-3 text-xs ">
                            <span className="px-2 py-1 font-semibold leading-tight rounded-sm">
                              {" "}
                              {admin.email}
                            </span>
                          </td>

                          <td className="px-4 py-3 text-sm ">
                            {user?.role === 1 && admin.super === 0 ? (
                              <>
                                <DeleteAdmin id={admin.slug} />
                              </>
                            ) : (
                              <div></div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardTeam;
