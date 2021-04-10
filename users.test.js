import Users from './users';
import axios from 'axios';

jest.mock('axios')

test("doit recupere les users d'api", ()=>{
    const users = [{name: "toto"}, {name: "titi"}]
    const resp = {data:users}
    axios.get.mockResolvedValue(resp)

    return Users.all().then(data => expect(data).toEqual(users));
})