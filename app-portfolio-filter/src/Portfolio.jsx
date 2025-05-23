import React, {Component} from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFilter: 'ALL',
            projects: [
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                category: "Business Cards"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                category: "Flayers"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                category: "Business Cards"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                category: "Websites"
                },
                {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                category: "Flayers"
                }
            ]
        }
    };

    handleSelectedFilter = (filter) => {
        this.setState({
            selectedFilter: filter
        });
    };

    getFilteredProjects = () => {
        const { selectedFilter, projects } = this.state;

        if(selectedFilter === 'ALL') {
            return projects;
        }
        return projects.filter(project => project.category === selectedFilter);
    }

    render() {
        const filters = ['ALL', 'Business Cards', 'Websites', 'Flayers'];
        const filteredProjects = this.getFilteredProjects();
        return (
            <div className="Portfolio">
                <Toolbar
                filters={filters}
                selected={this.state.selectedFilter}
                onSelectFilter={this.handleSelectedFilter}
                />
                <ProjectList projects={filteredProjects} />
            </div>
        );
    }
}

export default Portfolio;