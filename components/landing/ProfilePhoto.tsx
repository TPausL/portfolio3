import ich from "../../assets/IchAsta.jpg"; // reference from original

export function ProfilePhoto() {
    return (
        <div className="flex justify-center my-8">
            <img
                src={ich}
                alt="Timo Peters"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-neutral-700 shadow-2xl"
            />
        </div>
    );
}
