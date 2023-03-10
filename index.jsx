import { Header } from "@/componentes/header";
import { Footer } from "@/componentes/footer";
import { Items } from "@/componentes/items";

const Home = () => {
    //         const produkts = [
    //         {id: 1,
    //         name: "Цейлон",
    //         img:"https://www.google.com/search?q=%D1%87%D0%B0%D0%B9&tbm=isch&source=iu&ictx=1&vet=1&fir=migXMre1dcFObM%252CEGHg0YeC_qmImM%252C_%253BmPZEthovcbW22M%252CUmbhGUSwRiyw4M%252C_%253BuTW2YLHBzLNzJM%252CcnQBxtg3HCK2pM%252C_%253BY2NZioKhFo6vxM%252Cooxiel9f9mBoyM%252C_%253BGGH7AWU0XLDb5M%252CtMoxUPyQSosygM%252C_&usg=AI4_-kRPTzqGunsZRMTr9ebXZnxIYdrfBg&sa=X&ved=2ahUKEwi3lsXGztH9AhXIpYsKHb_WA34Q_h16BAh8EAE#imgrc=migXMre1dcFObM" ,
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci ipsum aut dolor assumenda soluta mollitia ut quo, eum placeat modi quos enim, sit, illo vitae obcaecati nihil id.",
    //         price: "500"
    //     }
    // ]
    return(
        <div className="wrapper">
            <Header />
            <Items
            img={produkts.img}
            name={produkts.name}
            description={produkts.description}
            price={produkts.price}
            ></Items>
            <Footer />
        </div>
    )
}

export default Home
