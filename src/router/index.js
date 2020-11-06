import { useMemo } from "react"
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"

export default function useRouter() {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    return useMemo(() => {
        return {
            push: history.push,
            replace: history.replace,
            pathname: location.pathname,
            query: {
                // ...queryString.parse(location.search),
                ...params
            },
            match,
            location,
            history
        }
    }, [params, match, location, history])
}