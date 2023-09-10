import { User } from "@shared/types"

interface State{
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User>>
}

const initialAuthState = {
    user: null,
    setUser: () => {}
}