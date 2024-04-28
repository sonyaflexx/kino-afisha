const convertTime = (minutes: number) : { hours: number, minutes: number } => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return { hours, minutes: remainingMinutes }
}

export default convertTime;