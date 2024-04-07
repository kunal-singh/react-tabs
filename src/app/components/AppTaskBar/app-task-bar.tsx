import { Tabs } from 'src/app/domain/tabs';
import styles from './app-task-bar.module.scss';
import { MouseEvent } from 'react';

/* eslint-disable-next-line */
export interface AppTaskBarProps {
  tabs: Tabs,
  add: () => Promise<void>
  remove: (index:number) => Promise<void>
  setTab: (index:number) => void
  activeTab: number
}

export function AppTaskBar(props: AppTaskBarProps) {
  const {tabs, add, remove, setTab, activeTab} = props;


  return (
    <div className={styles['container']}>
      {
        tabs.map(((t,index)=>{
             return (
              <div className={`${styles['tab']} ${activeTab === index ? styles['active'] : `` }`} onClick={(e)=>{e.stopPropagation(); setTab(index);}}>
                  <div className={styles['name']}>{t.name}</div>
                  <button type="button" className={styles['menu']} onClick={(e) => { e.stopPropagation(); remove(index)}}>close</button>
              </div>
             )
          }))
      }
      <button type="button" className={styles['add-btn']} onClick={add}>Add Tab</button>
    </div>
  );
}

export default AppTaskBar;
