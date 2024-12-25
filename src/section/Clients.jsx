import { clientReviews } from "../constant"

const Clients = () => {
  return (
    <section className="c-space my-20" id="clients">
        <p className="head-text">Clients</p>
        <div className="client-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 w-full">
            {clientReviews.map(({id, name, review, img, position}) => (
                <div key={id} className="client-review">
                    <div>
                        <p className="text-white-600">{review}</p>
                <div className="client-content">
                    <div>
                        <img src={img} alt={name} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="client-info">
                        <p className="text-white-600 font-medium">{name}</p>
                        <p className="text-white-600">{position}</p>
                        </div>
                    </div>
                      
                        </div>
                    </div>
            ))}

        </div>

    </section>
  )
}

export default Clients