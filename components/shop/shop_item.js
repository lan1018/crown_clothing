import React from 'react'
import Link from 'next/link'
import styles from './shop.module.scss'

export default function Item({name, remote_url, price}) {
    return (
        <div>
        
        <div className={styles.post}>
        <div className={styles.header_post}>
            <img src={remote_url} alt=""/>
        </div>

        <div className={styles.body_post}>
            <div className={styles.post_content}>

                <h1>{name}</h1>
                <p>$ {price}</p>

                <div className={styles.container_infos}>
                    <div className={styles.postedBy}>
                        <span>author</span>
                        John Doe
                    </div>

                    <div className={styles.container_tags}>
                        <span>tags</span>
                        <div className={styles.tags}>
                            <ul>
                                <li>design</li>
                                <li>front end</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}