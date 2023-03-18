import {useSelector,useDispatch } from 'react-redux'
import {newUsername,deleteUsername} from './UsernameSlice'

function UsernameShow() {
  const username = useSelector((state) => state.username.value);
  const dispatch = useDispatch();

  return (
        <span>{username}</span>
  );
}
export default UsernameShow;