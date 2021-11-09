import React, { Component } from "react";
import PropTypes from 'prop-types'
import searchIcon from '../../images/search-icong_new.svg'
import { Wrapper, Content } from "./SearchBar.styles";

class SearchBar extends Component {
    state = { value : ''};
    timeout = null;

    componentDidUpdate(_prevProps,prevState){
        if(this.state.value !== prevState.value){
            const { setSearchTerm } = this.props;
            clearTimeout(this.timeout);
            this.imeout = setTimeout(()=>{
                const { value } = this.state;
                setSearchTerm(value);
            },500)
        }
    }

    render(){
        return (
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt='icon-search'/>
                    <input 
                    type="text" 
                    placeholder="Find Movie" 
                    onChange={ event => this.setState({ value: event.currentTarget.value }) }
                    value={this.state.value}
                    />
                </Content>
            </Wrapper>
        );
    };
};

SearchBar.propTypes = {
    callBack: PropTypes.func
}

export default SearchBar;