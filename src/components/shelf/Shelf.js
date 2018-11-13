import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import { addProduct } from "../../store/actions/floatCartActions";
import Pagination from "../pagination/Pagination";
import Product from "./Product";
import Filter from "./Filter";
import ShelfHeader from "./ShelfHeader";
import Clearfix from "../Clearfix";
import Spinner from "../Spinner";

class Shelf extends Component {
  state = {
    loading: false
  };

  componentWillMount() {
    const { filters, sort, pagination } = this.props;

    this.handleFetchProducts(filters, sort, pagination);
  }

  componentWillReceiveProps(nextProps) {
    const {
      filters: nextFilters,
      sort: nextSort,
      pagination: nextPagination
    } = nextProps;

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, nextSort, undefined);
    }
    if (nextPagination !== this.props.pagination) {
      this.handleFetchProducts(undefined, undefined, nextPagination);
    }
  }

  handleFetchProducts = (
    filters = this.props.filters,
    sort = this.props.sort,
    pagination = this.props.pagination
  ) => {
    this.setState({ loading: true });
    this.props.fetchProducts(filters, sort, pagination, () => {
      this.setState({ loading: false });
    });
  };

  render() {
    const { products } = this.props;

    const p = products.map(p => {
      return (
        <Product product={p} addProduct={this.props.addProduct} key={p.id} />
      );
    });

    return (
      <React.Fragment>
        {this.state.loading && <Spinner />}
        <Filter />
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length} />
          {p}
          <Clearfix />
        </div>
        <Clearfix />
        <Pagination productsLength={this.props.totalActual} />
      </React.Fragment>
    );
  }
}

Shelf.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  filters: PropTypes.array,
  sort: PropTypes.string,
  pagination: PropTypes.object,
  totalActual: PropTypes.number
};

const mapStateToProps = state => ({
  products: state.products.items,
  totalActual: state.products.total,
  filters: state.filters.items,
  sort: state.sort.item,
  pagination: state.pagination.payload
});

export default connect(
  mapStateToProps,
  { fetchProducts, addProduct }
)(Shelf);
