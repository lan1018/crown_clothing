import {useState} from 'react'
import Item from './items'
import styles from './shop.module.scss'

export default function ItemContainer({categories}) {
    const [sections, setSections] = useState(categories)
    return (
        <div >
            <div className={styles.container}>
                {sections.map(({name, remote_url , cid, price}) => (
                    <Item key={cid} name={name} remote_url={remote_url} price={price}/>
                ))}
            </div>
        </div>
    )
}