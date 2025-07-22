
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Admin } from "@repo/ui/admin";




export default function Home() {
  return (
    <div>
      <Admin/>
      <Button appName="Shivanshu" className="is the">Press Me!!!</Button>
    </div>
  );
}
