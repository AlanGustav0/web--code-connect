import Image from "next/image"
import styles from './avatar.css'

export const Avatar = ({name, imageSrc}) => {
    return (
    <ul className="avatar">
        <li>
            <Image src={imageSrc} width={32} height={32} alt={`Avatar do(a) ${name}`}/>
        </li>
        <li>
            @{name}
        </li>
    </ul>)
}