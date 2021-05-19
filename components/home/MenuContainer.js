import {useState} from 'react'
import MenuItem from './MenuItem'
import styles from './MenuContainer.module.scss'

export default function MenuContainer({categories}) {
    const [sections, setSections] = useState(categories)
    return (
        <div className={styles.homepage}>
            <div className={styles.menuContainer_menu}>
                {sections.map(({name: title, remote_url: imageUrl, cid, size}) => (
                    <MenuItem key={cid} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        </div>
    )
}