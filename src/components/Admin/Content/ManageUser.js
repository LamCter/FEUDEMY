import ModelCreateUser from "./ModalCreateUser";

const ManageUser = () => {
  return (
    <div classNameName="manage-user-content">
      <div classNameName="title">Manage Users </div>
      <div classNameName="user-content">
        <div classNameName="new-user">
          <button>Add new user</button>
        </div>
        <div classNameName="table-user">
          Table user:
          <ModelCreateUser />
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
