import { createContext, useState } from 'react'

type WishlistContextProviderProps = {
    children: React.ReactNode
}

type WishlistContextProps = {
    wishlist: string[]
    setWishlist: React.Dispatch<React.SetStateAction<string[]>>
}

export const WishlistContext = createContext<WishlistContextProps | null>(null)

export const WishlistContextProvider = ({ children }: WishlistContextProviderProps) => {

    const [wishlist, setWishlist] = useState<string[]>([])

    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}