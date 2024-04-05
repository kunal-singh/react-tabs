import { Tabs } from 'src/app/domain/tabs';
import styles from './app-task-bar.module.scss';

/* eslint-disable-next-line */
export interface AppTaskBarProps {
  tabs: Tabs
}

export function AppTaskBar(props: AppTaskBarProps) {
  const {tabs} = props;
  return (
    <div className={styles['container']}>
      {
        tabs.map(t=>{
             return (<>
              {t.name}
             </>)
          })
        
      }
    </div>
  );
}

export default AppTaskBar;
