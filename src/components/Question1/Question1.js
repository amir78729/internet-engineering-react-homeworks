import s from './Question1.module.css';
export const Question1Component = () => {
    return (
        <div>
            <h1>سوال ۱</h1>
            <div className={s.Q1}>
                <h2>About Document Object Model (DOM)</h2>
                <p>
                    همانطور که می‌دانیم DOM به عنوان یک ساختار داده درختی نشان داده می‌شود. به همین
                    دلیل، تغییرات و به‌روزرسانی‌های DOM سریع است. اما پس از تغییر، عنصری به‌روزرسانی
                    می‌شود و در پی آن باید عناصری که به هر طریقی به آن مربوط‌ند نیز مجدداً رندر
                    شوند؛ تا در نهایت به‌روزرسانی کل UI محقق شود.
                    <br />
                    رندر مجدد و یا re-painting UI دقیقاً همان چیزی است که باعث کند شدن DOM می‌شود.
                    بنابراین، هرچه مولفه UI شما بیشتر باشد، به همان میزان به‌روزرسانی DOM نیز
                    زمانبرتر است. چرا که برای هر بروزرسانی DOM، تمامی مولفه‌ها مجددا رندر می‌شوند
                </p>
                <h2>What is Virtual DOM?</h2>
                <p>
                    مفهوم Virtual DOM فقط نمایش مجازی DOM است. هر زمان که وضعیت برنامه ما تغییر کند،
                    Virtual DOM به جای Real DOM به‌روز می‌شود.
                    <br />
                    هنگامی که عناصر جدیدی به UI اضافه می‌شوند، یک Virtual DOM ایجاد می‌شود که نحوه
                    نمایش آن به صورت درختی است. هر عنصر گره‌ای بر روی این درخت است. اگر حالت هر یک
                    از عناصر تغییر کند، یک درخت Virtual DOM جدید ایجاد می‌شود. سپس، این درخت با درخت
                    DOM مجازی قبلی، مقایسه می‌شود.
                    <br />
                    پس از انجام این کار، Virtual DOM این تغییرات را به بهترین روش ممکن بر روی Real
                    DOM اعمال می‌کند. این کار تضمین می‌کند که حداقل عملیات بر روی Real DOM انجام
                    می‌شود. از این رو، هزینه بروزرسانی آن کاهش می‌یابد.
                </p>
                <h2>Virtual DOM in React</h2>
                <p>
                    در React، هر قطعه UI یک جزء است و هر یک از مولفه‌ها نیز حالتی دارند. React از
                    الگوی قابل مشاهده پیروی می‌کند و گوش به زنگ است تا زمانی که حالت یکی از اجزاء
                    تغییر کند. هنگام رخ دادن این اتفاق، React سریعاً درخت Virtual DOM را به‌روز
                    می‌کند. پس از این بروزرسانی، React نسخه فعلی Virtual DOM را با نسخه قبلی آن
                    مقایسه می‌کند (diffing).
                    <br />
                    هنگامی که React اطلاع پیدا می‌کند که اشیایی در Virtual DOM تغییر کرده‌اند، React
                    تنها آن اشیاء را در Real DOM بروزرسانی می‌کند. این امر باعث می‌شود عملکرد مقایسه
                    به مراتب بهتر از مواقعی باشد که Real DOM را به صورت مستقیم دستکاری می‌کنیم.
                </p>

                <h2>References</h2>
                <ul>
                    <li>
                        <a href="https://reactjs.org/docs/faq-internals.html">
                            Virtual DOM and Internals (reactjs.org)
                        </a>
                    </li>
                    <li>
                        <a href="https://www.geeksforgeeks.org/reactjs-virtual-dom/">
                            ReactJS | Virtual DOM (GeeksForGeeks)
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
