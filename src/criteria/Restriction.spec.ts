import Restrictions from "./Restrictions";
import { assert } from "chai";

describe("criteria/Restriction.ts", () => {
    it("op", () => {
        let data = {
            name: "Gol D Roger"
        };
        let restriction = Restrictions.op("name", "===", "Gol D Roger");
        assert.isOk(restriction(data));

        restriction = Restrictions.op("name", "!==", "Gol D Roger");
        assert.isNotOk(restriction(data));
    });

    it("eq", () => {
        let data = {
            name: "kamil"
        };

        let restriction = Restrictions.eq("name", "kamil");
        assert.isOk(restriction(data));

        restriction = Restrictions.eq("name", "Kamil");
        assert.isOk(restriction(data));

        restriction = Restrictions.eq("name", "Kamil", true);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.eq("name", "kamil", true);
        assert.isOk(restriction(data));
    });

    it("lt", () => {
        let data = {
            name: 5
        };

        let restriction = Restrictions.lt("name", 6);
        assert.isOk(restriction(data));

        restriction = Restrictions.lt("name", 5);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.lt("name", 4);
        assert.isNotOk(restriction(data));
    });

    it("lte", () => {
        let data = {
            name: 5
        };

        let restriction = Restrictions.lte("name", 6);
        assert.isOk(restriction(data));

        restriction = Restrictions.lte("name", 5);
        assert.isOk(restriction(data));

        restriction = Restrictions.lte("name", 4);
        assert.isNotOk(restriction(data));
    });

    it("gt", () => {
        let data = {
            name: 5
        };

        let restriction = Restrictions.gt("name", 4);
        assert.isOk(restriction(data));

        restriction = Restrictions.gt("name", 5);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.gt("name", 6);
        assert.isNotOk(restriction(data));
    });

    it("gte", () => {
        let data = {
            name: 5
        };

        let restriction = Restrictions.gte("name", 4);
        assert.isOk(restriction(data));

        restriction = Restrictions.gte("name", 5);
        assert.isOk(restriction(data));

        restriction = Restrictions.gte("name", 6);
        assert.isNotOk(restriction(data));
    });

    it("between", () => {
        let data = {
            name: 5
        };

        let restriction = Restrictions.between("name", 4, 6);
        assert.isOk(restriction(data));

        restriction = Restrictions.between("name", 4, 3);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.between("name", 6, 4 );
        assert.isOk(restriction(data));
    });

    it("startsWith", () => {
        let data = {
            name: "kamil"
        };

        let restriction = Restrictions.startsWith("name", "ka");
        assert.isOk(restriction(data));

        restriction = Restrictions.startsWith("name", "Ka");
        assert.isOk(restriction(data));

        restriction = Restrictions.startsWith("name", "mi");
        assert.isNotOk(restriction(data));

        restriction = Restrictions.startsWith("name", "ka", true);
        assert.isOk(restriction(data));

        restriction = Restrictions.startsWith("name", "Ka", true);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.startsWith("name", "mi", true);
        assert.isNotOk(restriction(data));
    });

    it("endsWith", () => {
        let data = {
            name: "kamil"
        };

        let restriction = Restrictions.endsWith("name", "il");
        assert.isOk(restriction(data));

        restriction = Restrictions.endsWith("name", "IL");
        assert.isOk(restriction(data));

        restriction = Restrictions.endsWith("name", "mi");
        assert.isNotOk(restriction(data));

        restriction = Restrictions.endsWith("name", "il", true);
        assert.isOk(restriction(data));

        restriction = Restrictions.endsWith("name", "IL", true);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.endsWith("name", "MI", true);
        assert.isNotOk(restriction(data));
    });

    it("contains", () => {
        let data = {
            name: "kamil"
        };

        let restriction = Restrictions.contains("name", "il");
        assert.isOk(restriction(data));

        restriction = Restrictions.contains("name", "IL");
        assert.isOk(restriction(data));

        restriction = Restrictions.contains("name", "mi");
        assert.isOk(restriction(data));

        restriction = Restrictions.contains("name", "il", true);
        assert.isOk(restriction(data));

        restriction = Restrictions.contains("name", "IL", true);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.contains("name", "MI", true);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.contains("name", "plapla");
        assert.isNotOk(restriction(data));
    });


    it("like", () => {
        let data = {
            name: "kamil"
        };

        let restriction = Restrictions.like("name", "%il");
        assert.isOk(restriction(data));

        restriction = Restrictions.like("name", "%IL");
        assert.isOk(restriction(data));

        restriction = Restrictions.like("name", "%mi%");
        assert.isOk(restriction(data));

        restriction = Restrictions.like("name", "%il", true);
        assert.isOk(restriction(data));

        restriction = Restrictions.like("name", "%IL", true);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.like("name", "%MI%", true);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.like("name", "%plapla%");
        assert.isNotOk(restriction(data));
    });


    it("in", () => {
        let data = {
            name: "Roger"
        };

        let restriction = Restrictions.in("name",  ["Roger", "Luffy", "Nami"]);
        assert.isOk(restriction(data));

        restriction = Restrictions.in("name",  ["roger", "luffy", "nami"]);
        assert.isOk(restriction(data));

        restriction = Restrictions.in("name",  ["Luffy", "Nami"]);
        assert.isNotOk(restriction(data));


        restriction = Restrictions.in("name",  ["Roger", "Luffy", "Nami"], true);
        assert.isOk(restriction(data));

        restriction = Restrictions.in("name",  ["roger", "luffy", "nami"], true);
        assert.isNotOk(restriction(data));

        restriction = Restrictions.in("name",  ["Luffy", "Nami"]);
        assert.isNotOk(restriction(data));

    });

    it("isNull", () => {
        let data = {
            name: "kamil"
        };

        let restriction = Restrictions.isNull("name");
        assert.isNotOk(restriction(data));

        restriction = Restrictions.isNull("deneme");
        assert.isOk(restriction(data));

    });

    it("isNotNull", () => {
        let data = {
            name: "kamil"
        };

        let restriction = Restrictions.isNotNull("name");
        assert.isOk(restriction(data));

        restriction = Restrictions.isNotNull("deneme");
        assert.isNotOk(restriction(data));

    });

    it("isEmpty", () => {
        let data = {
            name: "kamil",
            deneme: ""
        };

        let restriction = Restrictions.isEmpty("name");
        assert.isNotOk(restriction(data));

        restriction = Restrictions.isEmpty("deneme");
        assert.isOk(restriction(data));

        restriction = Restrictions.isEmpty("example");
        assert.isOk(restriction(data));

    });


    it("isNotEmpty", () => {
        let data = {
            name: "kamil",
            deneme: ""
        };

        let restriction = Restrictions.isNotEmpty("name");
        assert.isOk(restriction(data));

        restriction = Restrictions.isNotEmpty("deneme");
        assert.isNotOk(restriction(data));

        restriction = Restrictions.isNotEmpty("example");
        assert.isNotOk(restriction(data));

    });


    it("or", () => {
        let data = {
            name: "kamil",
            deneme: ""
        };

        let restriction = Restrictions.or(
            Restrictions.isNotNull("name"),
            Restrictions.eq("name", "kamil"),
            Restrictions.isNotEmpty("name")
        );
        assert.isOk(restriction(data));


        restriction = Restrictions.or(
            Restrictions.isNull("name"),
            Restrictions.eq("name", "kamil")
        );
        assert.isOk(restriction(data));

        restriction = Restrictions.or(
            Restrictions.isNull("name"),
            Restrictions.isEmpty("name")
        );
        assert.isNotOk(restriction(data));

    });


    it("and", () => {
        let data = {
            name: "kamil",
            deneme: ""
        };

        let restriction = Restrictions.and(
            Restrictions.isNotNull("name"),
            Restrictions.eq("name", "kamil"),
            Restrictions.isNotEmpty("name")
        );
        assert.isOk(restriction(data));


        restriction = Restrictions.and(
            Restrictions.isNull("name"),
            Restrictions.eq("name", "kamil")
        );
        assert.isNotOk(restriction(data));

        restriction = Restrictions.and(
            Restrictions.isNull("name"),
            Restrictions.isEmpty("name")
        );
        assert.isNotOk(restriction(data));

    });
});
