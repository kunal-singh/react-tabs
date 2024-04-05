import { Tabs } from 'src/app/domain/tabs';
import styles from './app-task-bar.module.scss';

/* eslint-disable-next-line */
export interface AppTaskBarProps {
  tabs: Tabs,
  add: () => Promise<void>
  remove: (index:number) => Promise<void>
}

export function AppTaskBar(props: AppTaskBarProps) {
  const {tabs, add, remove} = props;
  return (
    <div className={styles['container']}>
      {
        tabs.map(((t,index)=>{
             return (
              <div className={styles['tab']}>
                  <div className={styles['name']}>{t.name}</div>
                  <button type="button" className={styles['menu']} onClick={(e) => remove(index)}>menu</button>
              </div>
             )
          }))
      }
      <button type="button" className={styles['add-btn']} onClick={add} >Add Tab</button>
    </div>
  );
}

export default AppTaskBar;
