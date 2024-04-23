const Rating = ({ value }: { value: number }) => {
    const ratingColor = (rating: number) : string => {
        switch (true) {
            case (rating < 3): {
                return('text-red-500')
            }
            case (rating >= 3 && rating < 7): {
                return('text-yellow-400')
            }
            default: {
                return('text-green-500')
            }
        }
    }

    return (
        <span className={ratingColor(value)}>{value}</span>
    )
}

export default Rating;