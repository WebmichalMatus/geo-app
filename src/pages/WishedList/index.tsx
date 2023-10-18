
import { useContext } from "react"
import { WishlistContext } from "../../context/WishlistContext"
import { Button } from "@nextui-org/react";

export default function WishedListPage() {
    const wishlistData = useContext(WishlistContext)

    const clearWishlist = () => {
        setWishlist([])
    }

    if (!wishlistData) {
        return <></>
    }

    const { wishlist, setWishlist } = wishlistData

    return (
        <div className="lg:flex gap-0 grow overflow-hidden">
            <div className="container mx-6 mt-6">
                <h1 className="text-3xl mb-6">
                    Your wished list
                </h1>
                {wishlist && wishlist.sort().map((wish: string) => (<div key={wish} className="py-2 font-medium my-1 text-sm max-w-sm border-b">{wish}</div>))}
                {wishlist.length === 0 && <div className="text-gray-500">You have no country in eishlist</div>}
                {wishlist.length > 0 && <Button onClick={clearWishlist} color="primary" className="mt-6">Clear wishlist</Button>}

            </div>


        </div >
    )
}
