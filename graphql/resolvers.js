const person = {
	name: "Minha",
	age: 20,
	gender: "male"
};

const resolvers = {
	Query: {
		person:() => person
	}
}

export default resolvers;