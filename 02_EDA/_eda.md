
## Exploratory Data Analysis (EDA)

- Purpose: understand data shape, quality, distribution, relationships, and problems before modeling.
- Typical workflow: load -> inspect -> clean -> visualize -> transform -> validate -> document.
- Quick checks: `shape`, `head()/tail()`, `info()`, `describe()`, `dtypes`, `value_counts()`.
- Data quality: missingness %, duplicates, inconsistent categories, outliers, incorrect types, date parsing.
- Summaries: groupby aggregations, pivot tables, cross-tabs, percentiles, quantiles.
- Relationships: correlation matrix, scatterplots, pairwise plots, contingency tables for categorical data.
- Outliers: IQR rule, z-score, visual checks (boxplots, scatter with log scale).
- Missing data strategies: drop, fill (mean/median/mode), forward/backward fill, model-based imputation.
- Feature engineering: encode categoricals, create dummies, bin continuous vars, datetime features, interaction terms.
- Reproducibility: raw -> cleaned versioning, seed for sampling, document assumptions and decisions.
- Tools: pandas, numpy, matplotlib, seaborn, scipy, statsmodels; consider sampling for large datasets.

## NumPy

- Core: `ndarray` is a homogenous, N-dimensional container for fast numerical computing.
- Creation: `np.array()`, `np.arange()`, `np.linspace()`, `np.zeros()`, `np.ones()`, `np.eye()`.
- Random: `np.random.rand()`, `np.random.randn()`, `np.random.randint()`; set seed with `np.random.seed()`.
- Indexing/slicing: basic slices, boolean masks, fancy integer indexing; remember views vs copies for slices.
- Broadcasting: rules allow arithmetic between differently-shaped arrays; align trailing dimensions first.
- Shape ops: `reshape()`, `ravel()/flatten()`, `transpose()`, `expand_dims()`, `squeeze()`.
- Linear algebra: `np.dot()`, `np.matmul()` / `@`, `np.linalg.inv()`, `np.linalg.eig()`.
- Reductions: `sum()`, `mean()`, `std()`, `var()`, `min()/max()`, `argmin()/argmax()` with `axis` param.
- Ufuncs: vectorized elementwise ops are fast (avoid Python loops); use `np.where()` for conditional logic.
- Dtype & memory: prefer appropriate dtypes (`float32` vs `float64`, `int32`) and contiguous arrays for performance.
- Missing values: use `np.nan` (float); integer arrays cannot hold `nan` without converting to float or object.

## Pandas

- Data structures: `Series` (1D), `DataFrame` (2D), indexed and column-labeled, heterogeneous by column.
- IO: `pd.read_csv()`, `read_excel()`, `read_parquet()`, `read_sql()`. Save with `to_csv()`, `to_parquet()`, `to_sql()`.
- Inspect: `df.head()`, `df.tail()`, `df.info()`, `df.describe(include='all')`, `df.shape`, `df.dtypes`, `df.memory_usage()`.
- Selection: label-based `.loc[]`, position-based `.iloc[]`, scalar `.at` / `.iat`, boolean masks and `.query()`.
- Missing data: `df.isna().sum()`, `dropna()`, `fillna()`, `interpolate()`; consider per-column strategies.
- Type conversions: `astype()`, `to_datetime()`, `pd.to_numeric()`, use `category` dtype for low-cardinality strings.
- Aggregation & group ops: `groupby()` + `agg()`, `transform()`, `filter()`, `pivot_table()`, `crosstab()`.
- Reshaping: `melt()` (wide->long), `pivot()`/`pivot_table()` (long->wide), `stack()`/`unstack()`.
- Joins/merges: `merge()` (SQL-like), `join()`, `concat()`; beware of duplicate keys and index alignment.
- Time series: set `DatetimeIndex`, use `resample()`, `rolling()`, `shift()`; timezone-aware datetimes with `tz_localize()`/`tz_convert()`.
- Performance tips: use `categorical` dtype, vectorized ops, `df.eval()`/`df.query()`, chunked reading (`chunksize`), avoid loops and chained assignment.
- Safe coding: avoid chained assignment (`df[a][b] = c`), use `.loc` or assign to a copy when intended.

## Matplotlib

- Role: foundational plotting library (low-level control). Two styles: pyplot state-machine (`plt`) and object-oriented (OO) API.
- Create plots: `fig, ax = plt.subplots()`; then `ax.plot()`, `ax.scatter()`, `ax.bar()`, `ax.hist()`, `ax.boxplot()`.
- Figure and Axes: `Figure` contains one or more `Axes` (subplots); set size with `figsize` and resolution with `dpi`.
- Labels & annotations: `ax.set_title()`, `ax.set_xlabel()`, `ax.set_ylabel()`, `ax.annotate()`; `ax.legend()` for legends.
- Layout: `plt.tight_layout()`, `fig.subplots_adjust()`, `constrained_layout=True` for complex layouts.
- Styling: colors, linestyles, markers, `alpha` for transparency; use `rcParams` or style sheets for consistency.
- Saving: `plt.savefig('file.png', dpi=300, bbox_inches='tight')`—save before `plt.show()` in scripts when using some backends.
- Interactive use: `%matplotlib inline` / `%matplotlib notebook` in notebooks; call `plt.show()` in scripts.
- prefer OO API for multi-plot figures and production code; pyplot is fine for quick exploration.

## Seaborn

- Role: high-level statistical plotting built on Matplotlib; works best with tidy (long-form) DataFrame inputs.
- Styling: `sns.set_style()`, `sns.set_context()`, `sns.set_palette()` for quick, attractive defaults.
- Figure-level vs axes-level: `relplot()`, `catplot()`, `pairplot()` return a `FacetGrid` (figure-level); `scatterplot()`, `boxplot()` are axes-level.
- Common plots: `scatterplot()`, `lineplot()`, `histplot()`, `kdeplot()`, `boxplot()`, `violinplot()`, `heatmap()`, `pairplot()`.
- Semantic mapping: use `hue`, `size`, `style`, `col`, `row` to map variables to visual properties or facets.
- Tidy data: functions expect long-form; use `pd.melt()` to reshape wide data into long form when needed.
- Statistical options: `estimator` (mean/median or `None`), `ci` for confidence intervals, `stat` parameter for hist/kde.
- Combining with Matplotlib: seaborn returns Matplotlib `Axes` objects—further customize with OO Matplotlib calls.
- Large datasets: sample or reduce alpha (`alpha`) and point size; use hexbin or `kdeplot` for density views.
- use `sns.heatmap(df.corr(), annot=True, fmt='.2f')` for quick correlation visuals during EDA.

