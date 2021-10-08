import { OrganismCard, MoleculeSearchInput, AtomCheckBox, AtomNoDataCard } from 'components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTags, getTagsBySearch, groupTags } from 'store/Tags/actions';

const TagsContent = ({ tags, getTagsBySearch, getTags, groupTags }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isTagsActionDone, setIsTagsActionDone] = useState(false);

  useEffect(async () => {
    await groupTags();
    getTags();
    setIsTagsActionDone(true);
  }, []);

  const onCheckboxChanged = (item) => {
    setSelectedTags(
      item.value ? [...selectedTags, item] : [...selectedTags.filter(({ id }) => id !== item.id)],
    );
  };

  const onTagsSearch = (searchKey) => {
    getTagsBySearch(searchKey.toLowerCase());
  };

  return (
    <OrganismCard shadow title="tag.list" className="mb-4">
      <MoleculeSearchInput placeholder="Search Tag" className="mb-3" onChange={onTagsSearch} />
      <div className="overflow-auto py-2" style={{ maxHeight: '166px', paddingLeft: '2px' }}>
        {isTagsActionDone && tags.length ? (
          tags.map(({ tag, totalCount, value = false }) => (
            <AtomCheckBox
              onChange={(checked) => onCheckboxChanged({ totalCount, tag, value: checked })}
              value={value}
              label={tag}
              labelSuffix={totalCount}
              key={tag}
            />
          ))
        ) : (
          <AtomNoDataCard />
        )}
      </div>
    </OrganismCard>
  );
};

const mapStateToProps = ({ tags: { tags } }) => ({ tags });
export default connect(mapStateToProps, { groupTags, getTagsBySearch, getTags })(TagsContent);
