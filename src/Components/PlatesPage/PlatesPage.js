import "./PlatesPage.css";
import Items from "../Items";


function PlatesPage(props) {
  return (
    <div>
      <h1 className="plates-header">צלחות</h1>
      <p className="plates-info">
        כאן יכול לשבת תיאור כללי של הקטגוריה. כמה משפטים שמתאימים לכל המוצרים.
        אם זו קולקציה אפשר לדבר על ההשראה והמקורות, אם סוג כלים מסויים על
        הגדלים, העמידות, איך מנקים ומטפלים בהם - כל מה שעולה על דעתך. ואפשר גם
        בלי : פשוט כותרת ומייד אחריה תמונות המוצרים. אפשר גם שלחלק מהקטגוריות
        יהיה תיאור קצר ולאחרות לא. זה דינאמי ותוכלי לשנות בכל רגע נתון כרצונך.
      </p>
      <Items type={'plates'}/>
    </div>
  );
}

export default PlatesPage;
