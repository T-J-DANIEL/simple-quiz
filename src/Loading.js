import { useGlobalContext } from "./context"
const Loading = () => {
    const {isLoading} = useGlobalContext()
    return (
        isLoading && <div className="loading-icon"/>
    )
}

export default Loading