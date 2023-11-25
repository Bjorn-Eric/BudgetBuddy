import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebase.conf";
import { ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/userSlice";

type CreateUserProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export async function createUser({
  firstName,
  lastName,
  email,
  password,
}: CreateUserProps) {
  const dispatch = useDispatch();

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const dbRef = ref(database, `users/${user.uid}`);
    const userData = {
      uid: user.uid,
      firstName,
      lastName,
      email,
    };
    await set(dbRef, userData);
    return userData;
    dispatch(login(userData));
  } catch (error) {
    handleAuthError(error);
  }
}

function handleAuthError(error: any) {
  switch (error.code) {
    case "auth/email-already-in-use":
      console.log("That email address is already in use!");
      break;
    case "auth/invalid-email":
      console.log("That email address is invalid!");
      break;
    default:
      console.error("Something went wrong:", error);
  }
}
